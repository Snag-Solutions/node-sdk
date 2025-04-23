// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snagsolutions/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.loyalty.rules.create({
      amount: '10.5',
      effectiveEndTime: '2024-12-31T23:59:00Z',
      effectiveStartTime: '2024-01-01T00:00:00Z',
      endTime: '2024-12-31T23:59:00Z',
      frequency: 'daily',
      loyaltyCurrencyId: '456e1234-e89b-12d3-a456-426614174003',
      metadata: {},
      name: 'Referral Bonus Rule',
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      startTime: '2024-01-01T00:00:00Z',
      type: 'Bonus',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.loyalty.rules.create({
      amount: '10.5',
      effectiveEndTime: '2024-12-31T23:59:00Z',
      effectiveStartTime: '2024-01-01T00:00:00Z',
      endTime: '2024-12-31T23:59:00Z',
      frequency: 'daily',
      loyaltyCurrencyId: '456e1234-e89b-12d3-a456-426614174003',
      metadata: {
        batchSize: 100,
        buttonText: 'Verify Now',
        checkComment: true,
        checkLike: true,
        checkRepost: true,
        checkText: 'loyalty',
        collection: [
          { address: '0xabcdefabcdefabcdefabcdefabcdefabcdef', multiplier: 2, network: 'mainnet' },
        ],
        completeProfileConditions: { twitter: true, discord: false },
        cta: { href: 'https://example.com', label: 'Click Here' },
        customRewardsApiKey: 'api-key-1234',
        discordServersToJoin: [
          {
            id: '123456789012345678',
            channels: [{ id: '987654321098765432', emojis: [{ id: '1f600' }], text: 'Hello' }],
            roles: [{ id: 'role123' }],
          },
        ],
        dripQuestsToComplete: [{ id: 'drip123' }],
        enableJoinDiscordServers: true,
        enableStreaks: true,
        enableVerifiedMultiplier: true,
        fillSource: 'opensea.io',
        firstReferralReward: 10,
        hasFillSource: true,
        hasNeverSold: false,
        hasOrderSource: true,
        hasPaidFullRoyalty: false,
        hasSaleCurrency: false,
        hasVerifiedTwitter: true,
        imageUrl: 'https://example.com/image.png',
        isCheckInOnEveryTxn: true,
        isMultiplierApplied: true,
        isRetroactive: true,
        isTokenHoldMultiplier: true,
        link: 'https://example.com',
        liquidity: {
          calculationType: 'fixed',
          chain: 'mainnet',
          customFunction: 'function(x) { return x * 1000; }',
          liquidityPerHour: 1000,
          onlyRewardInRangeLiquidity: true,
          pools: [{ id: '0xabcdefabcdefabcdefabcdefabcdefabcdef' }],
          protocol: 'Uniswap V2',
        },
        maxQty: 10,
        minQty: 1,
        multiplierLoyaltyCurrencyIds: ['currency123', 'currency456'],
        onlyKnownUsers: false,
        onlyNative: true,
        onlyNonListed: true,
        onlyRewardExistingUser: true,
        onlyRewardSingleTokenOwnership: true,
        orderSource: 'opensea.io',
        promoCode: 'PROMO123',
        range: [{ amount: 5, endRange: 10, startRange: 1 }],
        referralRequirements: {
          achievePoints: true,
          completeProfile: false,
          connectDiscord: true,
          connectEmail: true,
          connectTwitter: true,
          points: { amount: 50, loyaltyCurrecyId: 'currency123' },
        },
        referrerReward: 50,
        rewardByBatch: true,
        rewardPerImpression: true,
        saleCurrency: 'USD',
        secondReferralReward: 5,
        skipMultiplier: true,
        smartContract: {
          abi: '[]',
          addressMapping: '0x123...789',
          bonus: [{ amount: 50, count: 5 }],
          contractId: '123e4567-e89b-12d3-a456-426614174000',
          criteria: 'everyEvent',
          customRange: { endsAt: '2024-01-31T23:59:59Z', startsAt: '2024-01-01T00:00:00Z' },
          event: 'Transfer',
          max: 1000,
          params: [{ condition: '>=', name: 'value', value: '100' }],
          withBonus: true,
          withCustomRange: true,
          withMax: true,
        },
        snapshotProposals: [{ id: 'proposal123', space: 'space123' }],
        socialPlatform: 'X(Twitter)',
        socialPlatformLogo: 'https://example.com/logo.png',
        socialPlatformName: 'Twitter',
        steamAppId: '1234567890',
        streakArray: [{ streakAmount: 10, streakMilestone: 5 }],
        telegramChannelId: 'telegram-channel-123',
        timeDelayToVerifySeconds: 300,
        trackAllContracts: true,
        trackProgress: true,
        twitterAccountUrl: 'https://twitter.com/example_user',
        twitterHashtag: '#loyalty',
        twitterPostUrl: 'https://twitter.com/example/status/1234567890',
        twitterUserId: '1234567890',
        twitterUsername: '@example_user',
        verificationTextMinimumLength: 10,
        verifiedMultiplier: 1.5,
        verifyPlaceHolderText: 'Enter your verification code here.',
        walletType: 'evm',
      },
      name: 'Referral Bonus Rule',
      organizationId: '123e4567-e89b-12d3-a456-426614174001',
      startTime: '2024-01-01T00:00:00Z',
      type: 'Bonus',
      websiteId: '123e4567-e89b-12d3-a456-426614174002',
      backgroundAssetUrl: 'https://example.com/background.png',
      collectionAddress: '0x1234567890abcdef1234567890abcdef12345678',
      collections: [{ address: '0xabcdefabcdefabcdefabcdefabcdefabcdef', network: 'mainnet' }],
      customRewardsApiUrl: 'https://api.example.com/rewards',
      customRewardsCsvUrl: 'https://example.com/rewards.csv',
      description: 'A loyalty rule rewarding users for referrals.',
      hideInUi: false,
      interval: 'weekly',
      isRequired: true,
      loyaltyRuleGroupId: '123e4567-e89b-12d3-a456-426614174004',
      mediaUrl: 'https://example.com/media.png',
      network: 'mainnet',
      oauthCredentialsId: '123e4567-e89b-12d3-a456-426614174003',
      rewardType: 'points',
      subscriptionIdentifier: 'sub12345',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.loyalty.rules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: '10.5',
      endTime: '2024-12-31T23:59:00Z',
      name: 'Daily Rewards Program',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.loyalty.rules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: '10.5',
      endTime: '2024-12-31T23:59:00Z',
      name: 'Daily Rewards Program',
      collectionAddress: '0x1234567890abcdef1234567890abcdef12345678',
      collections: [{ address: '0xabcdefabcdefabcdefabcdefabcdefabcdef', network: 'mainnet' }],
      customRewardsApiUrl: 'https://api.example.com/rewards',
      customRewardsCsvUrl: 'https://example.com/rewards.csv',
      description: 'This rule rewards users daily for specific actions.',
      effectiveEndTime: '2024-12-31T23:59:00Z',
      effectiveStartTime: '2024-01-01T00:00:00Z',
      frequency: 'daily',
      hideInUi: false,
      interval: 'weekly',
      isRequired: true,
      loyaltyRuleGroupId: '123e4567-e89b-12d3-a456-426614174005',
      mediaUrl: 'https://example.com/media.png',
      metadata: {
        batchSize: 100,
        buttonText: 'Verify Now',
        checkComment: true,
        checkLike: true,
        checkRepost: true,
        checkText: 'loyalty',
        collection: [
          { address: '0xabcdefabcdefabcdefabcdefabcdefabcdef', multiplier: 2, network: 'mainnet' },
        ],
        completeProfileConditions: { twitter: true, discord: false },
        cta: { href: 'https://example.com', label: 'Click Here' },
        customRewardsApiKey: 'api-key-1234',
        discordServersToJoin: [
          {
            id: '123456789012345678',
            channels: [{ id: '987654321098765432', emojis: [{ id: '1f600' }], text: 'Hello' }],
            roles: [{ id: 'role123' }],
          },
        ],
        dripQuestsToComplete: [{ id: 'drip123' }],
        enableJoinDiscordServers: true,
        enableStreaks: true,
        enableVerifiedMultiplier: true,
        fillSource: 'opensea.io',
        firstReferralReward: 10,
        hasFillSource: true,
        hasNeverSold: false,
        hasOrderSource: true,
        hasPaidFullRoyalty: false,
        hasSaleCurrency: false,
        hasVerifiedTwitter: true,
        imageUrl: 'https://example.com/image.png',
        isCheckInOnEveryTxn: true,
        isMultiplierApplied: true,
        isRetroactive: true,
        isTokenHoldMultiplier: true,
        link: 'https://example.com',
        liquidity: {
          calculationType: 'fixed',
          chain: 'mainnet',
          customFunction: 'function(x) { return x * 1000; }',
          liquidityPerHour: 1000,
          onlyRewardInRangeLiquidity: true,
          pools: [{ id: '0xabcdefabcdefabcdefabcdefabcdefabcdef' }],
          protocol: 'Uniswap V2',
        },
        maxQty: 10,
        minQty: 1,
        multiplierLoyaltyCurrencyIds: ['currency123', 'currency456'],
        onlyKnownUsers: false,
        onlyNative: true,
        onlyNonListed: true,
        onlyRewardExistingUser: true,
        onlyRewardSingleTokenOwnership: true,
        orderSource: 'opensea.io',
        promoCode: 'PROMO123',
        range: [{ amount: 5, endRange: 10, startRange: 1 }],
        referralRequirements: {
          achievePoints: true,
          completeProfile: false,
          connectDiscord: true,
          connectEmail: true,
          connectTwitter: true,
          points: { amount: 50, loyaltyCurrecyId: 'currency123' },
        },
        referrerReward: 50,
        rewardByBatch: true,
        rewardPerImpression: true,
        saleCurrency: 'USD',
        secondReferralReward: 5,
        skipMultiplier: true,
        smartContract: {
          abi: '[]',
          addressMapping: '0x123...789',
          bonus: [{ amount: 50, count: 5 }],
          contractId: '123e4567-e89b-12d3-a456-426614174000',
          criteria: 'everyEvent',
          customRange: { endsAt: '2024-01-31T23:59:59Z', startsAt: '2024-01-01T00:00:00Z' },
          event: 'Transfer',
          max: 1000,
          params: [{ condition: '>=', name: 'value', value: '100' }],
          withBonus: true,
          withCustomRange: true,
          withMax: true,
        },
        snapshotProposals: [{ id: 'proposal123', space: 'space123' }],
        socialPlatform: 'X(Twitter)',
        socialPlatformLogo: 'https://example.com/logo.png',
        socialPlatformName: 'Twitter',
        steamAppId: '1234567890',
        streakArray: [{ streakAmount: 10, streakMilestone: 5 }],
        telegramChannelId: 'telegram-channel-123',
        timeDelayToVerifySeconds: 300,
        trackAllContracts: true,
        trackProgress: true,
        twitterAccountUrl: 'https://twitter.com/example_user',
        twitterHashtag: '#loyalty',
        twitterPostUrl: 'https://twitter.com/example/status/1234567890',
        twitterUserId: '1234567890',
        twitterUsername: '@example_user',
        verificationTextMinimumLength: 10,
        verifiedMultiplier: 1.5,
        verifyPlaceHolderText: 'Enter your verification code here.',
        walletType: 'evm',
      },
      network: 'mainnet',
      oauthCredentialsId: '123e4567-e89b-12d3-a456-426614174000',
      rewardType: 'points',
      startTime: '2024-01-01T00:00:00Z',
      subscriptionIdentifier: 'sub12345',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.loyalty.rules.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.loyalty.rules.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.list(
        {
          collectionAddress: '0x1234567890abcdef1234567890abcdef12345678',
          isActive: 'true',
          limit: 50,
          loyaltyRuleGroupId: '123e4567-e89b-12d3-a456-426614174004',
          loyaltyRuleId: '123e4567-e89b-12d3-a456-426614174001',
          organizationId: '123e4567-e89b-12d3-a456-426614174001',
          startingAfter: '123e4567-e89b-12d3-a456-426614174010',
          websiteId: '123e4567-e89b-12d3-a456-426614174002',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.loyalty.rules.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('complete', async () => {
    const responsePromise = client.loyalty.rules.complete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('complete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.complete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('complete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.complete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          amount: 10,
          commentLink: 'https://x.com/Snag_Solutions/status/1735407428093522314',
          idempotencyKey: 'IDEMPOTENCY123',
          loyaltyQuestionChoiceId: '123e4567-e89b-12d3-a456-426614174000',
          userId: '123e4567-e89b-12d3-a456-426614174000',
          verificationCode: 'VERIF123',
          verifyOnly: 'verifyOnly',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatus', async () => {
    const responsePromise = client.loyalty.rules.getStatus();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatus: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.loyalty.rules.getStatus({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SnagSolutions.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.loyalty.rules.getStatus(
        {
          organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          walletAddress: 'walletAddress',
          websiteId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});
