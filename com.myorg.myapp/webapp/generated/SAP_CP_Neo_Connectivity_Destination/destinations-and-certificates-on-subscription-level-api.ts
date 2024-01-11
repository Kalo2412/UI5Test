/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
/**
 * Representation of the 'DestinationsAndCertificatesOnSubscriptionLevelApi'.
 * This API is part of the 'SAP_CP_Neo_Connectivity_Destination' service.
 */
export const DestinationsAndCertificatesOnSubscriptionLevelApi = {
  /**
   * Get a list of destination or certificate configurations on subscription level as plain text separated by new lines.
   * @param subscriberAccount - Subscriber account technical name
   * @param providerAccount - Application account technical name
   * @param application - Application technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOauthSpacesAppliancesComponentsWebBaseConnectivityProvideraccountProviderapplicationBySubscriberAccountAndApplicationAndProviderAccountAndApplication:
    (subscriberAccount: string, providerAccount: string, application: string) =>
      new OpenApiRequestBuilder<any>(
        'get',
        '/oauth/SPACES/{subscriberAccount}/appliances/{application}/components/web/base/connectivity/provideraccount/{providerAccount}/providerapplication/{application}/',
        {
          pathParameters: { subscriberAccount, providerAccount, application }
        }
      ),
  /**
   * Post or update destination or certificate configuration on subscription level.  In the case of destination configuration, 'configurationName' must be equal to the value of 'Name' property in the destination configuration file.
   * @param subscriberAccount - Subscriber account technical name
   * @param providerAccount - Application account technical name
   * @param application - Application technical name
   * @param body - Request body.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createOauthSpacesAppliancesComponentsWebBaseConnectivityProvideraccountProviderapplicationBySubscriberAccountAndApplicationAndProviderAccountAndApplication:
    (
      subscriberAccount: string,
      providerAccount: string,
      application: string,
      body: any
    ) =>
      new OpenApiRequestBuilder<any>(
        'post',
        '/oauth/SPACES/{subscriberAccount}/appliances/{application}/components/web/base/connectivity/provideraccount/{providerAccount}/providerapplication/{application}/',
        {
          pathParameters: { subscriberAccount, providerAccount, application },
          body
        }
      ),
  /**
   * Get a destination or certificate configuration posted on subscription level.
   * @param subscriberAccount - Subscriber account technical name
   * @param providerAccount - Application account technical name
   * @param application - Application technical name
   * @param configurationName - Configuration technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getOauthSpacesAppliancesComponentsWebBaseConnectivityProvideraccountProviderapplicationBySubscriberAccountAndApplicationAndProviderAccountAndApplicationAndConfigurationName:
    (
      subscriberAccount: string,
      providerAccount: string,
      application: string,
      configurationName: string
    ) =>
      new OpenApiRequestBuilder<any>(
        'get',
        '/oauth/SPACES/{subscriberAccount}/appliances/{application}/components/web/base/connectivity/provideraccount/{providerAccount}/providerapplication/{application}/{configurationName}',
        {
          pathParameters: {
            subscriberAccount,
            providerAccount,
            application,
            configurationName
          }
        }
      ),
  /**
   * Delete a destination or certificate configuration posted on subscription level.
   * @param subscriberAccount - Subscriber account technical name
   * @param providerAccount - Application account technical name
   * @param application - Application technical name
   * @param configurationName - Configuration technical name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteOauthSpacesAppliancesComponentsWebBaseConnectivityProvideraccountProviderapplicationBySubscriberAccountAndApplicationAndProviderAccountAndApplicationAndConfigurationName:
    (
      subscriberAccount: string,
      providerAccount: string,
      application: string,
      configurationName: string
    ) =>
      new OpenApiRequestBuilder<any>(
        'delete',
        '/oauth/SPACES/{subscriberAccount}/appliances/{application}/components/web/base/connectivity/provideraccount/{providerAccount}/providerapplication/{application}/{configurationName}',
        {
          pathParameters: {
            subscriberAccount,
            providerAccount,
            application,
            configurationName
          }
        }
      )
};
