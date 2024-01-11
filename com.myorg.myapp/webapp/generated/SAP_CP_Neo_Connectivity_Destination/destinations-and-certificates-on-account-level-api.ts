/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'DestinationsAndCertificatesOnAccountLevelApi'.
 * This API is part of the 'SAP_CP_Neo_Connectivity_Destination' service.
 */
export const DestinationsAndCertificatesOnAccountLevelApi = {
  /**
   * Get a list of technical names of all destination and certificate configurations posted on account level
   * @param account - Account technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOauthSpacesConnectivityByAccount: (account: string) =>
    new OpenApiRequestBuilder<any>(
      'get',
      '/oauth/SPACES/{account}/connectivity/',
      {
        pathParameters: { account }
      }
    ),
  /**
   * Post or update a destination or certificate configuration on account level.
   * @param account - Account technical name
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createOauthSpacesConnectivityByAccount: (account: string, body: any) =>
    new OpenApiRequestBuilder<any>(
      'post',
      '/oauth/SPACES/{account}/connectivity/',
      {
        pathParameters: { account },
        body
      }
    ),
  /**
   * Get a destination or certificate configuration posted on account level. Account name is passed as path parameter and configuration name as form data(must be the same as the 'Name' property in the destination configuration file).
   * @param account - Account technical name
   * @param configurationName - Configuration technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOauthSpacesConnectivityByAccountAndConfigurationName: (
    account: string,
    configurationName: string
  ) =>
    new OpenApiRequestBuilder<any>(
      'get',
      '/oauth/SPACES/{account}/connectivity/{configurationName}',
      {
        pathParameters: { account, configurationName }
      }
    ),
  /**
   * Delete a destination or certificate configuration posted on account level.
   * @param account - Account technical name
   * @param configurationName - Configuration technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteOauthSpacesConnectivityByAccountAndConfigurationName: (
    account: string,
    configurationName: string
  ) =>
    new OpenApiRequestBuilder<any>(
      'delete',
      '/oauth/SPACES/{account}/connectivity/{configurationName}',
      {
        pathParameters: { account, configurationName }
      }
    )
};
