export type RootObject = RootObjectChild[];
export type RootObjectChildPhotoImagesSmall = {
  width: string;
  url: string;
  height: string;
};
export type RootObjectChildPhotoImagesThumbnail = {
  width: string;
  url: string;
  height: string;
};
export type RootObjectChildPhotoImagesOriginal = {
  width: string;
  url: string;
  height: string;
};
export type RootObjectChildPhotoImagesLarge = {
  width: string;
  url: string;
  height: string;
};
export type RootObjectChildPhotoImagesMedium = {
  width: string;
  url: string;
  height: string;
};
export type RootObjectChildPhotoImages = {
  small: RootObjectChildPhotoImagesSmall;
  thumbnail: RootObjectChildPhotoImagesThumbnail;
  original: RootObjectChildPhotoImagesOriginal;
  large: RootObjectChildPhotoImagesLarge;
  medium: RootObjectChildPhotoImagesMedium;
};
export type RootObjectChildPhotoUser = {
  user_id?: any;
  member_id: string;
  type: string;
};
export type RootObjectChildPhoto = {
  images: RootObjectChildPhotoImages;
  is_blessed: boolean;
  uploaded_date: string;
  caption: string;
  id: string;
  helpful_votes: string;
  published_date: string;
  user: RootObjectChildPhotoUser;
};
export type RootObjectChildAncestorsSubcategory = {
  key: string;
  name: string;
};
export type RootObjectChildAncestors = {
  subcategory: RootObjectChildAncestorsSubcategory[];
  name: string;
  abbrv?: any;
  location_id: string;
};
export type RootObjectChildCategory = {
  key: string;
  name: string;
};
export type RootObjectChildSubcategory = {
  key: string;
  name: string;
};
export type RootObjectChildAddress_obj = {
  street1: string;
  street2: string;
  city: string;
  state?: any;
  country: string;
  postalcode: string;
};
export type RootObjectChildHours = {
  week_ranges: any;
  timezone: string;
};
export type RootObjectChildCuisine = {
  key: string;
  name: string;
};
export type RootObjectChildEstablishment_types = {
  key: string;
  name: string;
};
export type RootObjectChild = {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo: RootObjectChildPhoto;
  awards: any[];
  doubleclick_zone: string;
  preferred_map_engine: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
  distance: string;
  distance_string: string;
  bearing: string;
  rating: string;
  is_closed: boolean;
  open_now_text: string;
  is_long_closed: boolean;
  price_level: string;
  price: string;
  description: string;
  web_url: string;
  write_review: string;
  ancestors: RootObjectChildAncestors[];
  category: RootObjectChildCategory;
  subcategory: RootObjectChildSubcategory[];
  parent_display_name: string;
  is_jfy_enabled: boolean;
  nearest_metro_station: any[];
  phone: string;
  website: string;
  email: string;
  address_obj: RootObjectChildAddress_obj;
  address: string;
  hours: RootObjectChildHours;
  is_candidate_for_contact_info_suppression: boolean;
  cuisine: RootObjectChildCuisine[];
  dietary_restrictions: any[];
  establishment_types: RootObjectChildEstablishment_types[];
};
