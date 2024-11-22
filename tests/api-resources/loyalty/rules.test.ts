// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from 'snag-solutions';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.loyalty.rules.create({
      amount: {},
      effectiveEndTime: '2019-12-27T18:11:19.117Z',
      effectiveStartTime: '2019-12-27T18:11:19.117Z',
      endTime: '2019-12-27T18:11:19.117Z',
      frequency: 'none',
      loyaltyCurrencyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: {},
      name: 'x',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      startTime: '2019-12-27T18:11:19.117Z',
      type: 'Bonus',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.loyalty.rules.create({
      amount: {},
      effectiveEndTime: '2019-12-27T18:11:19.117Z',
      effectiveStartTime: '2019-12-27T18:11:19.117Z',
      endTime: '2019-12-27T18:11:19.117Z',
      frequency: 'none',
      loyaltyCurrencyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: {
        buttonText: 'buttonText',
        checkComment: true,
        checkLike: true,
        checkRepost: true,
        checkText: 'checkText',
        collection: [{ address: 'address', multiplier: 0, network: 'mainnet' }],
        cta: { href: 'href', label: 'label' },
        customRewardsApiKey: 'customRewardsApiKey',
        discordServersToJoin: [
          { id: 'id', channels: [{ emojis: [{ id: 'id' }], id: 'id' }], roles: [{ id: 'id' }] },
        ],
        dripQuestsToComplete: [{ id: 'id' }],
        enableJoinDiscordServers: true,
        enableStreaks: true,
        enableVerifiedMultiplier: true,
        firstReferralReward: 0,
        hasNeverSold: true,
        hasPaidFullRoyalty: true,
        hasSaleCurrency: true,
        hasVerifiedTwitter: true,
        imageUrl: 'imageUrl',
        isMultiplierApplied: true,
        isRetroactive: true,
        isTokenHoldMultiplier: true,
        link: 'link',
        maxQty: 0,
        minQty: 0,
        multiplierLoyaltyCurrencyIds: ['string'],
        onlyKnownUsers: true,
        onlyNative: true,
        onlyNonListed: true,
        promoCode: 'promoCode',
        range: [{ amount: 0, endRange: 0, startRange: 0 }],
        referralRequirements: {
          achievePoints: true,
          completeProfile: true,
          connectDiscord: true,
          connectEmail: true,
          connectTwitter: true,
          points: { amount: 0, loyaltyCurrecyId: 'loyaltyCurrecyId' },
        },
        referrerReward: 0,
        rewardPerImpression: true,
        saleCurrency: 'saleCurrency',
        secondReferralReward: 0,
        smartContract: {
          abi: 'abi',
          addressMapping: 'addressMapping',
          bonus: [{ amount: 0, count: 0 }],
          criteria: 'everyEvent',
          customRange: { endsAt: '2019-12-27T18:11:19.117Z', startsAt: '2019-12-27T18:11:19.117Z' },
          event: 'event',
          max: 0,
          params: [{ condition: 'condition', name: 'name', value: 'value' }],
          withBonus: true,
          withCustomRange: true,
          withMax: true,
        },
        snapshotProposals: [{ id: 'id', space: 'space' }],
        socialPlatform: 'Twitch',
        socialPlatformLogo: 'socialPlatformLogo',
        socialPlatformName: 'socialPlatformName',
        streakArray: [{ streakAmount: 0, streakMilestone: 0 }],
        telegramChannelId: 'telegramChannelId',
        timeDelayToVerifySeconds: 'string',
        twitterAccountUrl: 'twitterAccountUrl',
        twitterHashtag: 'twitterHashtag',
        twitterPostUrl: 'twitterPostUrl',
        twitterUserId: 'twitterUserId',
        twitterUsername: 'twitterUsername',
        verificationTextMinimumLength: 0,
        verifiedMultiplier: 0,
        verifyPlaceHolderText: 'verifyPlaceHolderText',
        walletType: 'evm',
      },
      name: 'x',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      startTime: '2019-12-27T18:11:19.117Z',
      type: 'Bonus',
      websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      backgroundAssetUrl: 'backgroundAssetUrl',
      collectionAddress: 'collectionAddress',
      collections: [{ address: 'address', network: 'mainnet' }],
      customRewardsApiUrl: 'https://example.com',
      customRewardsCsvUrl: 'https://example.com',
      description: 'description',
      hideInUi: true,
      interval: 'daily',
      isRequired: true,
      network: 'mainnet',
      oauthCredentialsId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      rewardType: 'points',
      subscriptionIdentifier: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.loyalty.rules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: {},
      effectiveEndTime: '2019-12-27T18:11:19.117Z',
      effectiveStartTime: '2019-12-27T18:11:19.117Z',
      endTime: '2019-12-27T18:11:19.117Z',
      frequency: 'none',
      metadata: {},
      name: 'x',
      startTime: '2019-12-27T18:11:19.117Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.loyalty.rules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: {},
      effectiveEndTime: '2019-12-27T18:11:19.117Z',
      effectiveStartTime: '2019-12-27T18:11:19.117Z',
      endTime: '2019-12-27T18:11:19.117Z',
      frequency: 'none',
      metadata: {
        buttonText: 'buttonText',
        checkComment: true,
        checkLike: true,
        checkRepost: true,
        checkText: 'checkText',
        collection: [{ address: 'address', multiplier: 0, network: 'mainnet' }],
        cta: { href: 'href', label: 'label' },
        customRewardsApiKey: 'customRewardsApiKey',
        discordServersToJoin: [
          { id: 'id', channels: [{ emojis: [{ id: 'id' }], id: 'id' }], roles: [{ id: 'id' }] },
        ],
        dripQuestsToComplete: [{ id: 'id' }],
        enableJoinDiscordServers: true,
        enableStreaks: true,
        enableVerifiedMultiplier: true,
        firstReferralReward: 0,
        hasNeverSold: true,
        hasPaidFullRoyalty: true,
        hasSaleCurrency: true,
        hasVerifiedTwitter: true,
        imageUrl: 'imageUrl',
        isMultiplierApplied: true,
        isRetroactive: true,
        isTokenHoldMultiplier: true,
        link: 'link',
        maxQty: 0,
        minQty: 0,
        multiplierLoyaltyCurrencyIds: ['string'],
        onlyKnownUsers: true,
        onlyNative: true,
        onlyNonListed: true,
        promoCode: 'promoCode',
        range: [{ amount: 0, endRange: 0, startRange: 0 }],
        referralRequirements: {
          achievePoints: true,
          completeProfile: true,
          connectDiscord: true,
          connectEmail: true,
          connectTwitter: true,
          points: { amount: 0, loyaltyCurrecyId: 'loyaltyCurrecyId' },
        },
        referrerReward: 0,
        rewardPerImpression: true,
        saleCurrency: 'saleCurrency',
        secondReferralReward: 0,
        smartContract: {
          abi: 'abi',
          addressMapping: 'addressMapping',
          bonus: [{ amount: 0, count: 0 }],
          criteria: 'everyEvent',
          customRange: { endsAt: '2019-12-27T18:11:19.117Z', startsAt: '2019-12-27T18:11:19.117Z' },
          event: 'event',
          max: 0,
          params: [{ condition: 'condition', name: 'name', value: 'value' }],
          withBonus: true,
          withCustomRange: true,
          withMax: true,
        },
        snapshotProposals: [{ id: 'id', space: 'space' }],
        socialPlatform: 'Twitch',
        socialPlatformLogo: 'socialPlatformLogo',
        socialPlatformName: 'socialPlatformName',
        streakArray: [{ streakAmount: 0, streakMilestone: 0 }],
        telegramChannelId: 'telegramChannelId',
        timeDelayToVerifySeconds: 'string',
        twitterAccountUrl: 'twitterAccountUrl',
        twitterHashtag: 'twitterHashtag',
        twitterPostUrl: 'twitterPostUrl',
        twitterUserId: 'twitterUserId',
        twitterUsername: 'twitterUsername',
        verificationTextMinimumLength: 0,
        verifiedMultiplier: 0,
        verifyPlaceHolderText: 'verifyPlaceHolderText',
        walletType: 'evm',
      },
      name: 'x',
      startTime: '2019-12-27T18:11:19.117Z',
      customRewardsApiUrl: 'https://example.com',
      customRewardsCsvUrl: 'https://example.com',
      description: 'description',
      hideInUi: true,
      interval: 'daily',
      isRequired: true,
      oauthCredentialsId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      rewardType: 'points',
      subscriptionIdentifier: 'subscriptionIdentifier',
    });
  });

  test('list', async () => {
    const responsePromise = client.loyalty.rules.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.loyalty.rules.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.list(
        {
          collectionAddress: '0x1234567890abcdef1234567890abcdef12345678',
          includeDripQuestRules: true,
          limit: 50,
          organizationId: '123e4567-e89b-12d3-a456-426614174001',
          startingAfter: '123e4567-e89b-12d3-a456-426614174010',
          websiteId: '123e4567-e89b-12d3-a456-426614174002',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.loyalty.rules.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('complete', async () => {
    const responsePromise = client.loyalty.rules.complete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.complete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  test('complete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.complete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { userId: '123e4567-e89b-12d3-a456-426614174000', verificationCode: 'VERIF123' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
