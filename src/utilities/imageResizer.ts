import sharp from 'sharp';
import path from 'path';

const resizeImageAsync = async (
  fileName: string,
  width: number,
  height: number
): Promise<void> => {
  const imagePath = path.normalize(
    __dirname + `./../../assets/full/${fileName}.jpg`
  );
  const targetPath = path.normalize(
    __dirname + `./../../assets/thumb/${fileName}_thumb.jpg`
  );

  sharp.cache(false);
  const isProcessed = await isImageAlreadyProcessed(targetPath, width, height);
  if (!isProcessed) {
    await sharp(imagePath).resize(width, height).toFile(targetPath);
  }
};

const isImageAlreadyProcessed = async function (
  filePath: string,
  width: number,
  height: number
): Promise<boolean> {
  try {
    const metadata = await sharp(filePath).metadata();
    return metadata.height == height && metadata.width == width;
  } catch (error) {
    return false;
  }
};

export default resizeImageAsync;
