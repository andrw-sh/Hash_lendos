import { rm } from 'node:fs/promises';

const targets = ['.next', 'out'];

await Promise.all(
  targets.map(async (target) => {
    try {
      await rm(target, { recursive: true, force: true });
      console.log(`Removed ${target}`);
    } catch (error) {
      console.warn(`Failed to remove ${target}:`, error);
    }
  })
);

