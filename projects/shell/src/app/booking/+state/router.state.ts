import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { BaseRouterStoreState, getRouterSelectors, provideRouterStore, routerReducer } from "@ngrx/router-store";
import { createFeature, provideState } from "@ngrx/store";


const DEFAULT_ROUTER_NAME = 'router';

export const routerFeature = createFeature({
  name: DEFAULT_ROUTER_NAME,
  reducer: routerReducer<BaseRouterStoreState>,
  extraSelectors: ({ selectRouterState }) => ({
    ...getRouterSelectors(selectRouterState)
  })
});

export function provideRouterFeature(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(routerFeature),
    provideRouterStore()
  ]);
}
