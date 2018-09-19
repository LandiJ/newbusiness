import { ManifestManagementModule } from './manifest-management.module';

describe('ManifestManagementModule', () => {
  let manifestManagementModule: ManifestManagementModule;

  beforeEach(() => {
    manifestManagementModule = new ManifestManagementModule();
  });

  it('should create an instance', () => {
    expect(manifestManagementModule).toBeTruthy();
  });
});
