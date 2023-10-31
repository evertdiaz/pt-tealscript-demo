import { describe, test, expect, beforeAll, beforeEach } from '@jest/globals';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import * as algokit from '@algorandfoundation/algokit-utils';
import { DemoClient } from '../contracts/clients/DemoClient';


const fixture = algorandFixture();

let appClient: DemoClient;

describe('Demo', () => {
  beforeEach(fixture.beforeEach);

  beforeAll(async () => {
    await fixture.beforeEach();
    const { algod, testAccount } = fixture.context;

    appClient = new DemoClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod
    );

    await appClient.create.createApplication({});
  });

  test('sum', async () => {
    const a = 13;
    const b = 37;
    const sum = await appClient.getSum({ a, b });
    expect(sum.return?.valueOf()).toBe(BigInt(a + b));
  });

  test('diff', async () => {
    const a = 13;
    const b = 37;
    await appClient.makeDiff({ a, b});
    const diff = await appClient.getDiff({});
    expect(diff.return?.valueOf()).toBe(BigInt(a >= b ? a - b : b - a));
  });

  test('asa', async () => {
    const name = 'Meu primer asa';
    await appClient.appClient.fundAppAccount(algokit.microAlgos(200_000));
    const asset = await appClient.createAsa({ name }, { sendParams: { fee: algokit.microAlgos(2_000) } });
    expect(asset.return?.valueOf()).toBeGreaterThan(BigInt(0));
  });
});
