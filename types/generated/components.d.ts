import type { Schema, Attribute } from '@strapi/strapi';

export interface VenueMetadataContactLinks extends Schema.Component {
  collectionName: 'components_venue_metadata_contact_links';
  info: {
    displayName: 'contactLinks';
    icon: 'phone';
  };
  attributes: {
    website: Attribute.String;
    twitter: Attribute.String;
    facebook: Attribute.String;
    instagram: Attribute.String;
  };
}

export interface VenueMetadataDeliveryOptions extends Schema.Component {
  collectionName: 'components_venue_metadata_delivery_options';
  info: {
    displayName: 'Delivery Options';
    icon: 'car';
    description: '';
  };
  attributes: {
    available: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    preferredMethod: Attribute.Enumeration<
      ['call', 'website', 'uberEats', 'grubHub', 'otherLink']
    >;
    otherLink: Attribute.String;
  };
}

export interface VenueMetadataLocation extends Schema.Component {
  collectionName: 'components_venue_metadata_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    latitude: Attribute.Float & Attribute.Required;
    longitude: Attribute.Float;
    neighborhood: Attribute.Relation<
      'venue-metadata.location',
      'oneToOne',
      'api::neighborhood.neighborhood'
    >;
    phone: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'venue-metadata.contact-links': VenueMetadataContactLinks;
      'venue-metadata.delivery-options': VenueMetadataDeliveryOptions;
      'venue-metadata.location': VenueMetadataLocation;
    }
  }
}
