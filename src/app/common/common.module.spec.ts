import { TCommonModule } from './common.module';

describe('CommonModule', () => {
  let commonModule: TCommonModule;

  beforeEach(() => {
    commonModule = new TCommonModule();
  });

  it('should create an instance', () => {
    expect(commonModule).toBeTruthy();
  });
});
