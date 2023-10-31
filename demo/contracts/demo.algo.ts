import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class Demo extends Contract {
  diff = GlobalStateKey<number>();

  getSum(a: number, b: number): number {
    return a + b;
  }

  makeDiff(a: number, b: number): number {
    const result: number = a > b ? a - b : b - a;
    this.diff.value = result;
    return result;
  }

  getDiff(): number {
    return this.diff.value;
  }

  createAsa(name: string): Asset {
    const asa = sendAssetCreation({
      configAssetTotal: 1_000,
      configAssetName: name,
    });
    return asa;
  }
}
