/*
 * Public API Surface of shared-util-signals-zoneless
 */

import {
  signal, computed, effect,
  fromObservable as toSignal,
  fromSignal as toObservable
} from './lib/angular/core';
import {
  injectSignalChangeDetection,
  provideRouterChangeDetectionTrigger,
  bootstrapSignalApplication as bootstrapApplication
} from './lib/angular-architects/signal-utils';

export const zoneless = {
  signal, computed, effect,
  toObservable, toSignal,
  injectSignalChangeDetection,
  provideRouterChangeDetectionTrigger,
  bootstrapApplication
};
