import { describe, expect, it } from 'vitest';
import { projectScoreControl } from './pages/Assessment';

/**
 * The project page records a parent-scored rubric once. A second click before
 * the component re-rendered used to become attempt 2, which the retake cap
 * lowered to 80%, silently changing a 100-point project to 80.
 */
describe('project score submission control', () => {
  it('stays disabled until every rubric row has a score', () => {
    expect(projectScoreControl(false, false)).toEqual({
      disabled: true,
      label: 'Record project score',
    });
  });

  it('allows exactly one save and then locks the button', () => {
    expect(projectScoreControl(true, false)).toEqual({
      disabled: false,
      label: 'Record project score',
    });
    expect(projectScoreControl(true, true)).toEqual({
      disabled: true,
      label: 'Score recorded',
    });
  });
});
