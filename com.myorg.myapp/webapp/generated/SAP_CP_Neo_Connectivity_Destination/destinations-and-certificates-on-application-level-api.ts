/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'DestinationsAndCertificatesOnApplicationLevelApi'.
 * This API is part of the 'SAP_CP_Neo_Connectivity_Destination' service.
 */
export const DestinationsAndCertificatesOnApplicationLevelApi = {
  /**
   * Get a list of technical names of all destination and certificate configuration posted on application level, as plain text, separated by new lines. If none is found, empty text.
   * @param account - Application account technical name
   * @param application - Application technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOauthSpacesAppliancesComponentsWebBaseConnectivityByAccountAndApplication:
    (account: string, application: string) =>
      new OpenApiRequestBuilder<any>(
        'get',
        '/oauth/SPACES/{account}/appliances/{application}/components/web/base/connectivity/',
        {
          pathParameters: { account, application }
        }
      ),
  /**
   * Post or update a destination or certificate configuration on application level. In the case of destination configuration, 'configurationName' must be equal to the value of 'Name' property in the destination configuration file.
   * @param account - Application account technical name
   * @param application - Application technical name
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createOauthSpacesAppliancesComponentsWebBaseConnectivityByAccountAndApplication:
    (account: string, application: string, body: any) =>
      new OpenApiRequestBuilder<any>(
        'post',
        '/oauth/SPACES/{account}/appliances/{application}/components/web/base/connectivity/',
        {
          pathParameters: { account, application },
          body
        }
      ),
  /**
   * Get a destination or certificate configuration posted on application level.
   * @param account - Application account technical name
   * @param application - Application technical name
   * @param configurationName - Configuration technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOauthSpacesAppliancesComponentsWebBaseConnectivityByAccountAndApplicationAndConfigurationName:
    (account: string, application: string, configurationName: string) =>
      new OpenApiRequestBuilder<any>(
        'get',
        '/oauth/SPACES/{account}/appliances/{application}/components/web/base/connectivity/{configurationName}',
        {
          pathParameters: { account, application, configurationName }
        }
      ),
  /**
   * Delete a destination or certificate configuration posted on application level.
   * @param account - Application account technical name
   * @param application - Application technical name
   * @param configurationName - Configuration technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteOauthSpacesAppliancesComponentsWebBaseConnectivityByAccountAndApplicationAndConfigurationName:
    (account: string, application: string, configurationName: string) =>
      new OpenApiRequestBuilder<any>(
        'delete',
        '/oauth/SPACES/{account}/appliances/{application}/components/web/base/connectivity/{configurationName}',
        {
          pathParameters: { account, application, configurationName }
        }
      )
};
