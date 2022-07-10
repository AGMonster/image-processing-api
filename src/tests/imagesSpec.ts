import resizeImageAsync from './../utilities/imageResizer';

describe('ResizeImageAsync function should resolve or reject', () => {
  it('Expect ResizeImageAsync not throw error', async () => {
    const existingFileName = 'fjord';
    const width = 400;
    const height = 600;
    let errorThrown = false;

    try {
      await resizeImageAsync(existingFileName, width, height);
    } catch (err) {
      errorThrown = true;
    }

    expect(errorThrown).toBeFalse();
  });

  it('Expect ResizeImageAsync to throw error', async () => {
    const existingFileName = '';
    const width = 400;
    const height = 600;
    let errorThrown = false;

    try {
      await resizeImageAsync(existingFileName, width, height);
    } catch (err) {
      errorThrown = true;
    }

    expect(errorThrown).toBeTrue();
  });
});
