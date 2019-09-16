// This is an interface that we use to read Json file from API/Local 
export interface Entity {
    id: number;
    uuid_id?: number;
    name: string;
    name_short?: any;
    legal_form?: any;
    registered_office_address_id?: any;
    created_at: string;
    updated_at: string;
}

export interface AccessRight {
    id: number;
    object_id: number;
    entity_id: number;
    permission: string;
    created_at?: any;
    updated_at?: any;
    entity: Entity;
}

export interface Sample {
    userId: number;
    id: number;
    title: string;
    body: string;
    access_rights: AccessRight[];
}
export interface SeaShipment {
    id: number;
    shipment_sequence_number: number;
    tradeflow_id: number;
    shipment_id: number;
    uuid_id?: any;
    carrier_id: number;
    inttra_reference?: any;
    booking_reference: string;
    bill_of_lading_reference: string;
    created_at: string;
    updated_at: string;
    last_status_phase?: any;
    object_id: number;
    event_date: string;
    humanName: string;
    type: string;
    statuses: Status[];
    carrier: Carrier;
    transport_unit_sub_shipments: any[];
    sea_movements: SeaMovement[];
}


export interface Entity {
    id: number;
    uuid_id?: number;
    name: string;
    name_short?: any;
    legal_form?: any;
    registered_office_address_id?: any;
    created_at: string;
    updated_at: string;
}

export interface AccessRight {
    id: number;
    object_id: number;
    entity_id: number;
    permission: string;
    created_at?: any;
    updated_at?: any;
    entity: Entity;
}

export interface SpecificStatus {
    id: number;
    created_at: string;
    updated_at: string;
    xml_message: string;
    raw_attribute: string;
    raw_filetype: string;
}

export interface Status {
    id: number;
    message: string;
    phase?: any;
    type: string;
    specific_status_type: string;
    specific_status_id: number;
    object_type: string;
    object_id: number;
    event_date: Date;
    created_at: string;
    updated_at: string;
    tradeflow_id: number;
    shipment_condition_reading_source_id: number;
    transport_unit_id: number;
    location_id?: any;
    level: string;
    specific_status: SpecificStatus;
}

export interface Carrier {
    id: number;
    uuid_id?: any;
    name: string;
    name_short?: any;
    legal_form?: any;
    registered_office_address_id?: any;
    created_at?: any;
    updated_at?: any;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Geolocation {
    type: string;
    geometries: Geometry[];
}

export interface Point {
    type: string;
    coordinates: number[];
}

export interface Coordinate {
    type: string;
    coordinates: number[];
}

export interface RawLocation {
    id: number;
    un_country: string;
    un_location: string;
    un_name: string;
    uuid_id?: any;
    coordinate: Coordinate;
}

export interface Coordinate2 {
    type: string;
    coordinates: number[];
}

export interface Country {
    id: number;
    name: string;
    name_long: string;
    postal: string;
    name_formal: string;
    iso_a2: string;
    iso_a3: string;
    coordinate: Coordinate2;
    uuid_id: number;
    uic_country_code: string;
    uic_id: string;
    uic_description: string;
}

export interface Location {
    id: number;
    name: string;
    type: string;
    reference: string;
    geolocation: Geolocation;
    raw_location_type: string;
    raw_location_id: number;
    uuid_id?: number;
    address_line?: any;
    postal_code?: any;
    city_geoname_id?: any;
    country_id: number;
    created_at?: any;
    updated_at: string;
    timezone: string;
    fullAddress: string;
    point: Point;
    raw_location: RawLocation;
    country: Country;
}

export interface Source {
    id: number;
    name: string;
    device_id?: any;
    device_type?: any;
    uuid_id?: any;
    created_at?: any;
    updated_at?: any;
    reference: string;
    device?: any;
}

export interface Reading {
    id: number;
    reference?: any;
    tu_condition_reading_source_id: number;
    tu_expected_location_id: number;
    type: string;
    accuracy_level: string;
    reading: Date;
    event_date: Date;
    uuid_id?: any;
    created_at: Date;
    updated_at: Date;
    source: Source;
}

export interface VesselTeloLoading {
    id: number;
    reference: string;
    transport_unit_id: number;
    location_id: number;
    tradeflow_id: number;
    uuid_id?: any;
    created_at: string;
    updated_at: string;
    location: Location;
    readings: Reading[];
}

export interface Geometry2 {
    type: string;
    coordinates: number[];
}

export interface Geolocation2 {
    type: string;
    geometries: Geometry2[];
}

export interface Point2 {
    type: string;
    coordinates: number[];
}

export interface Coordinate3 {
    type: string;
    coordinates: number[];
}

export interface RawLocation2 {
    id: number;
    un_country: string;
    un_location: string;
    un_name: string;
    uuid_id?: any;
    coordinate: Coordinate3;
}

export interface Coordinate4 {
    type: string;
    coordinates: number[];
}

export interface Country2 {
    id: number;
    name: string;
    name_long: string;
    postal: string;
    name_formal: string;
    iso_a2: string;
    iso_a3: string;
    coordinate: Coordinate4;
    uuid_id: number;
    uic_country_code: string;
    uic_id: string;
    uic_description: string;
}

export interface Location2 {
    id: number;
    name: string;
    type: string;
    reference: string;
    geolocation: Geolocation2;
    raw_location_type: string;
    raw_location_id: number;
    uuid_id?: number;
    address_line?: any;
    postal_code?: any;
    city_geoname_id?: any;
    country_id: number;
    created_at?: any;
    updated_at: string;
    timezone: string;
    fullAddress: string;
    point: Point2;
    raw_location: RawLocation2;
    country: Country2;
}

export interface Source2 {
    id: number;
    name: string;
    device_id?: any;
    device_type?: any;
    uuid_id?: any;
    created_at?: any;
    updated_at?: any;
    reference: string;
    device?: any;
}

export interface Reading2 {
    id: number;
    reference?: any;
    tu_condition_reading_source_id: number;
    tu_expected_location_id: number;
    type: string;
    accuracy_level: string;
    reading: Date;
    event_date: Date;
    uuid_id?: any;
    created_at: Date;
    updated_at: Date;
    source: Source2;
}

export interface VesselTeloDischarge {
    id: number;
    reference: string;
    transport_unit_id: number;
    location_id: number;
    tradeflow_id: number;
    uuid_id?: any;
    created_at: string;
    updated_at: string;
    location: Location2;
    readings: Reading2[];
}

export interface Vessel {
    id: number;
    name: string;
    IMO_number: string;
    MMSI_number?: any;
    marinetraffic_id?: any;
    call_sign?: any;
    type?: any;
    country_code?: any;
    dwt?: any;
    uuid_id?: number;
    created_at?: any;
    updated_at?: any;
}

export interface TransportUnit {
    id: number;
    uuid_id?: any;
    reference: string;
    specific_tu_type_id: number;
    specific_tu_type_type: string;
    created_at?: any;
    updated_at?: any;
    type: string;
}

export interface TransportUnitSubShipment {
    id: number;
    transport_unit_id: number;
    tradeflow_id: number;
    shipment_object_type: string;
    shipment_object_id: number;
    status: string;
    last_active: string;
    created_at: string;
    updated_at: string;
    type: string;
    transport_unit: TransportUnit;
}

export interface SeaMovement {
    id: number;
    sea_shipment_id: number;
    tradeflow_id: number;
    vessel_id: number;
    shipment_sequence_number: number;
    uuid_id?: any;
    vessel_telo_loading_id: number;
    vessel_telo_discharge_id: number;
    created_at: string;
    updated_at: string;
    last_status_phase?: any;
    object_id?: any;
    event_date?: any;
    statuses: any[];
    vessel_telo_loading: VesselTeloLoading;
    vessel_telo_discharge: VesselTeloDischarge;
    vessel: Vessel;
    transport_unit_sub_shipments: TransportUnitSubShipment[];
}

export interface SeaShipment {
    id: number;
    shipment_sequence_number: number;
    tradeflow_id: number;
    shipment_id: number;
    uuid_id?: any;
    carrier_id: number;
    inttra_reference?: any;
    booking_reference: string;
    bill_of_lading_reference: string;
    created_at: string;
    updated_at: string;
    last_status_phase?: any;
    object_id: number;
    event_date: string;
    humanName: string;
    type: string;
    statuses: Status[];
    carrier: Carrier;
    transport_unit_sub_shipments: any[];
    sea_movements: SeaMovement[];
}

export interface RootObject {
    id: number;
    name: string;
    tradeflow_id: number;
    uuid_id?: any;
    created_at: string;
    updated_at: string;
    stage: number;
    last_status_phase?: any;
    object_id?: any;
    event_date?: any;
    access_rights: AccessRight[];
    statuses: any[];
    transport_unit_sub_shipments: any[];
    road_shipments: any[];
    rail_shipments: any[];
    sea_shipments: SeaShipment[];
}



