import chroma from 'chroma-js';
import { getYear, parseISO } from 'date-fns';
import React, { CSSProperties, Fragment, FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { DEFAULT_LABELS, LABEL_MARGIN, NAMESPACE } from './constants';
import styles from './styles/styles.module.css';
import {
  generateEmptyData,
  getClassName,
  getMonthLabels,
  groupByWeeks,
  maxWeekdayLabelLength,
} from './utils/calendar';
import { createTheme } from './utils/theme';

const query = '(prefers-reduced-motion: reduce)';

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', onChange);

    return () => {
      mediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  return prefersReducedMotion;
}

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState('light');

  const onChange = (event) => setColorScheme(event.matches ? 'dark' : 'light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', onChange);

    return () => {
      mediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  return colorScheme;
}

const ActivityCalendar = ({
  data,
  blockMargin = 4,
  blockRadius = 2,
  blockSize = 12,
  colorScheme = undefined,
  eventHandlers = {},
  fontSize = 14,
  hideColorLegend = false,
  hideMonthLabels = false,
  hideTotalCount = false,
  labels: labelsProp = undefined,
  maxLevel = 4,
  loading = false,
  renderBlock = undefined,
  showWeekdayLabels = false,
  style: styleProp = {},
  theme: themeProp = undefined,
  totalCount: totalCountProp = undefined,
  weekStart = 0, // Sunday
}) => {
  maxLevel = Math.max(1, maxLevel);

  const theme = createTheme(themeProp, maxLevel + 1);
  const systemColorScheme = useColorScheme();
  const colorScale = theme[colorScheme ?? systemColorScheme];

  const useAnimation = !usePrefersReducedMotion();

  if (loading) {
    data = generateEmptyData();
  }

  if (data.length === 0) {
    return null;
  }

  const year = getYear(parseISO(data[0]?.date));
  const weeks = groupByWeeks(data, weekStart);

  const labels = Object.assign({}, DEFAULT_LABELS, labelsProp);
  const labelHeight = hideMonthLabels ? 0 : fontSize + LABEL_MARGIN;

  const weekdayLabelOffset = showWeekdayLabels
    ? maxWeekdayLabelLength(weeks[0], weekStart, labels.weekdays, fontSize) + LABEL_MARGIN
    : undefined;

  function getDimensions() {
    return {
      width: weeks.length * (blockSize + blockMargin) - blockMargin,
      height: labelHeight + (blockSize + blockMargin) * 7 - blockMargin,
    };
  }

  function getEventHandlers(activity) {
    return (
      Object.keys(eventHandlers)
    ).reduce(
      (handlers, key) => ({
        ...handlers,
        [key]: (event) => eventHandlers[key]?.(event)(activity),
      }),
      {},
    );
  }

  function renderCalendar() {
    return weeks
      .map((week, weekIndex) =>
        week.map((activity, dayIndex) => {
          if (!activity) {
            return null;
          }

          if (activity.level < 0 || activity.level > maxLevel) {
            throw new RangeError(
              `Provided activity level ${activity.level} for ${activity.date} is out of range. It must be between 0 and ${maxLevel}.`,
            );
          }

          const style =
            loading && useAnimation
              ? {
                  animation: `${styles.loadingAnimation} 1.75s ease-in-out infinite`,
                  animationDelay: `${weekIndex * 20 + dayIndex * 20}ms`,
                }
              : undefined;

          const block = (
            <rect
              {...getEventHandlers(activity)}
              x={0}
              y={labelHeight + (blockSize + blockMargin) * dayIndex}
              width={blockSize}
              height={blockSize}
              rx={blockRadius}
              ry={blockRadius}
              fill={colorScale[activity.level]}
              data-date={activity.date}
              data-level={activity.level}
              style={style}
            />
          );

          return (
            <Fragment key={activity.date}>
              {renderBlock ? renderBlock(block, activity) : block}
            </Fragment>
          );
        }),
      )
      .map((week, x) => (
        <g key={x} transform={`translate(${(blockSize + blockMargin) * x}, 0)`}>
          {week}
        </g>
      ));
  }

  function renderFooter() {
    if (hideTotalCount && hideColorLegend) {
      return null;
    }

    const totalCount =
      typeof totalCountProp === 'number'
        ? totalCountProp
        : data.reduce((sum, activity) => sum + activity.count, 0);

    return (
      <footer
        className={getClassName('footer', styles.footer)}
        style={{ marginLeft: weekdayLabelOffset }}
      >
        {/* Placeholder */}
        {loading && <div>&nbsp;</div>}

        {!loading && !hideTotalCount && (
          <div className={getClassName('count')}>
            {labels.totalCount
              ? labels.totalCount
                  .replace('{{count}}', String(totalCount))
                  .replace('{{year}}', String(year))
              : `${totalCount} activities in ${year}`}
          </div>
        )}

        {!loading && !hideColorLegend && (
          <div className={getClassName('legend-colors', styles.legendColors)}>
            <span style={{ marginRight: '0.4em' }}>{labels?.legend?.less ?? 'Less'}</span>
            {Array(maxLevel + 1)
              .fill(undefined)
              .map((_, level) => (
                <svg width={blockSize} height={blockSize} key={level}>
                  <rect
                    width={blockSize}
                    height={blockSize}
                    fill={colorScale[level]}
                    rx={blockRadius}
                    ry={blockRadius}
                  />
                </svg>
              ))}
            <span style={{ marginLeft: '0.4em' }}>{labels?.legend?.more ?? 'More'}</span>
          </div>
        )}
      </footer>
    );
  }

  function renderLabels() {
    if (!showWeekdayLabels && hideMonthLabels) {
      return null;
    }

    return (
      <>
        {showWeekdayLabels && (
          <g className={getClassName('legend-weekday')}>
            {weeks[0].map((_, index) => {
              if (index % 2 === 0) {
                return null;
              }

              const dayIndex = (index + weekStart) % 7;

              return (
                <text
                  x={-LABEL_MARGIN}
                  y={labelHeight + (blockSize + blockMargin) * index + blockSize / 2}
                  dominantBaseline="middle"
                  textAnchor="end"
                  key={index}
                >
                  {labels.weekdays[dayIndex]}
                </text>
              );
            })}
          </g>
        )}
        {!hideMonthLabels && (
          <g className={getClassName('legend-month')}>
            {getMonthLabels(weeks, labels.months).map(({ label, weekIndex }) => (
              <text
                x={(blockSize + blockMargin) * weekIndex}
                dominantBaseline="hanging"
                key={weekIndex}
              >
                {label}
              </text>
            ))}
          </g>
        )}
      </>
    );
  }

  const { width, height } = getDimensions();

  const containerStyles = {
    fontSize,
    ...(useAnimation && {
      [`--${NAMESPACE}-loading`]: colorScale[0],
      [`--${NAMESPACE}-loading-active`]:
        colorScheme === 'light'
          ? chroma(colorScale[0]).darken(0.3).hex()
          : chroma(colorScale[0]).brighten(0.25).hex(),
    }),
  };

  return (
    <article
      className={`${NAMESPACE} ${styles.container}`}
      style={{ ...styleProp, ...containerStyles }}
    >
      <div className={getClassName('scroll-container', styles.scrollContainer)}>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className={getClassName('calendar', styles.calendar)}
          style={{ marginLeft: weekdayLabelOffset }}
        >
          {!loading && renderLabels()}
          {renderCalendar()}
        </svg>
      </div>
      {renderFooter()}
    </article>
  );
};

export const Skeleton = props => (
  <ActivityCalendar data={[]} {...props} />
);

export default ActivityCalendar;
