// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SnagSolutions from '@snag/sdk';
import { Response } from 'node-fetch';

const client = new SnagSolutions({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.loyalty.rules.create({
      amount: '10.5',
      effectiveEndTime: '2024-12-31T23:59:00Z',
      effectiveStartTime: '2024-01-01T00:00:00Z',
      endTime: '2024-12-31T23:59:00Z',
      frequency: 'none',
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

  test('create: required and optional params', async () => {
    const response = await client.loyalty.rules.create({
      amount: '10.5',
      effectiveEndTime: '2024-12-31T23:59:00Z',
      effectiveStartTime: '2024-01-01T00:00:00Z',
      endTime: '2024-12-31T23:59:00Z',
      frequency: 'none',
      loyaltyCurrencyId: '456e1234-e89b-12d3-a456-426614174003',
      metadata: {
        buttonText: 'Verify Now',
        checkComment: true,
        checkLike: true,
        checkRepost: true,
        checkText: 'loyalty',
        collection: [
          { address: '0xabcdefabcdefabcdefabcdefabcdefabcdef', multiplier: 2, network: 'mainnet' },
        ],
        cta: { href: 'https://example.com', label: 'Click Here' },
        customRewardsApiKey: 'api-key-1234',
        discordServersToJoin: [
          {
            id: '123456789012345678',
            channels: [{ id: '987654321098765432', emojis: [{ id: '1f600' }] }],
            roles: [{ id: 'role123' }],
          },
        ],
        dripQuestsToComplete: [{ id: 'drip123' }],
        enableJoinDiscordServers: true,
        enableStreaks: true,
        enableVerifiedMultiplier: true,
        firstReferralReward: 10,
        hasNeverSold: false,
        hasPaidFullRoyalty: false,
        hasSaleCurrency: false,
        hasVerifiedTwitter: true,
        imageUrl: 'https://example.com/image.png',
        isMultiplierApplied: true,
        isRetroactive: true,
        isTokenHoldMultiplier: true,
        link: 'https://example.com',
        maxQty: 10,
        minQty: 1,
        multiplierLoyaltyCurrencyIds: ['currency123', 'currency456'],
        onlyKnownUsers: false,
        onlyNative: true,
        onlyNonListed: true,
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
        rewardPerImpression: true,
        saleCurrency: 'USD',
        secondReferralReward: 5,
        smartContract: {
          abi: '[]',
          addressMapping: '0x123...789',
          bonus: [{ amount: 50, count: 5 }],
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
        socialPlatform: 'Twitch',
        socialPlatformLogo: 'https://example.com/logo.png',
        socialPlatformName: 'Twitter',
        streakArray: [{ streakAmount: 10, streakMilestone: 5 }],
        telegramChannelId: 'telegram-channel-123',
        timeDelayToVerifySeconds: 300,
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
      interval: 'daily',
      isRequired: true,
      loyaltyRuleGroupId: '123e4567-e89b-12d3-a456-426614174004',
      network: 'mainnet',
      oauthCredentialsId: '123e4567-e89b-12d3-a456-426614174003',
      rewardType: 'points',
      subscriptionIdentifier: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.loyalty.rules.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: '10.5',
      effectiveEndTime: '2024-12-31T23:59:00Z',
      effectiveStartTime: '2024-01-01T00:00:00Z',
      endTime: '2024-12-31T23:59:00Z',
      frequency: 'none',
      metadata: {},
      name: 'Daily Rewards Program',
      startTime: '2024-01-01T00:00:00Z',
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
      amount: '10.5',
      effectiveEndTime: '2024-12-31T23:59:00Z',
      effectiveStartTime: '2024-01-01T00:00:00Z',
      endTime: '2024-12-31T23:59:00Z',
      frequency: 'none',
      metadata: {
        buttonText: 'Verify Now',
        checkComment: true,
        checkLike: true,
        checkRepost: true,
        checkText: 'loyalty',
        collection: [
          { address: '0xabcdefabcdefabcdefabcdefabcdefabcdef', multiplier: 2, network: 'mainnet' },
        ],
        cta: { href: 'https://example.com', label: 'Click Here' },
        customRewardsApiKey: 'api-key-1234',
        discordServersToJoin: [
          {
            id: '123456789012345678',
            channels: [{ id: '987654321098765432', emojis: [{ id: '1f600' }] }],
            roles: [{ id: 'role123' }],
          },
        ],
        dripQuestsToComplete: [{ id: 'drip123' }],
        enableJoinDiscordServers: true,
        enableStreaks: true,
        enableVerifiedMultiplier: true,
        firstReferralReward: 10,
        hasNeverSold: false,
        hasPaidFullRoyalty: false,
        hasSaleCurrency: false,
        hasVerifiedTwitter: true,
        imageUrl: 'https://example.com/image.png',
        isMultiplierApplied: true,
        isRetroactive: true,
        isTokenHoldMultiplier: true,
        link: 'https://example.com',
        maxQty: 10,
        minQty: 1,
        multiplierLoyaltyCurrencyIds: ['currency123', 'currency456'],
        onlyKnownUsers: false,
        onlyNative: true,
        onlyNonListed: true,
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
        rewardPerImpression: true,
        saleCurrency: 'USD',
        secondReferralReward: 5,
        smartContract: {
          abi: '[]',
          addressMapping: '0x123...789',
          bonus: [{ amount: 50, count: 5 }],
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
        socialPlatform: 'Twitch',
        socialPlatformLogo: 'https://example.com/logo.png',
        socialPlatformName: 'Twitter',
        streakArray: [{ streakAmount: 10, streakMilestone: 5 }],
        telegramChannelId: 'telegram-channel-123',
        timeDelayToVerifySeconds: 300,
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
      name: 'Daily Rewards Program',
      startTime: '2024-01-01T00:00:00Z',
      customRewardsApiUrl: 'https://api.example.com/rewards',
      customRewardsCsvUrl: 'https://example.com/rewards.csv',
      description: 'This rule rewards users daily for specific actions.',
      hideInUi: false,
      interval: 'daily',
      isRequired: true,
      loyaltyRuleGroupId: '123e4567-e89b-12d3-a456-426614174005',
      oauthCredentialsId: '123e4567-e89b-12d3-a456-426614174000',
      rewardType: 'points',
      subscriptionIdentifier: 'sub12345',
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
        {
          commentLink: 'https://x.com/Snag_Solutions/status/1735407428093522314',
          userId: '123e4567-e89b-12d3-a456-426614174000',
          verificationCode: 'VERIF123',
          walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SnagSolutions.NotFoundError);
  });
});