export type ResultData = { events: Array<Event>; rest_url: string; total: number; total_pages: 1 };

type Event = {
	id: number;
	global_id: string;
	global_id_lineage: string[];
	author: number;
	status: string;
	date: Date;
	date_utc: Date;
	modified: Date;
	modified_utc: Date;
	url: string;
	rest_url: string;
	title: string;
	description: string;
	excerpt?: string;
	slug: string;
	image: boolean;
	all_day: boolean;
	start_date: string;
	start_date_details: DateDetails;
	end_date: Date;
	end_date_details: DateDetails;
	utc_start_date: Date;
	utc_start_date_details: DateDetails;
	utc_end_date: Date;
	utc_end_date_details: DateDetails;
	timezone: string;
	timezone_abbr: string;
	cost?: string;
	cost_details?: CostDetails;
	website: string;
	show_map: boolean;
	show_map_link: boolean;
	hide_from_listings: boolean;
	sticky: boolean;
	featured: boolean;
	categories: Array<Category>;
	tags: Array<Tag>;
	venue: Venue;
	organizer: Array<Organizer>;
	custom_fields: Array<any>;
};

type DateDetails = { year: number; month: number; day: number; hour: number; minutes: number; seconds: number };

type CostDetails = { currency_symbol: string; currency_code: string; currency_position: string; values: Array<string> };

type Category = {
	name: string;
	slug: string;
	term_group: number;
	term_taxonomy_id: number;
	taxonomy: string;
	description: string;
	parent: number;
	count: number;
	filter: string;
	id: string;
	urls: {
		self: string;
		collection: string;
	};
};

type Tag = {
	name: string;
	slug: string;
	term_group: number;
	term_taxonomy_id: number;
	taxonomy: string;
	description: string;
	parent: number;
	count: number;
	filter: string;
	id: number;
	urls: {
		self: string;
		collection: string;
	};
};

type Venue = {
	id: number;
	author: number;
	status: string;
	date: string;
	date_utc: string;
	modified: string;
	modified_utc: string;
	url: string;
	venue: string;
	slug: string;
	show_map: boolean;
	show_map_link: boolean;
	global_id: string;
	global_id_lineage: Array<string>;
};

type Organizer = {
	id: number;
	author: number;
	status: string;
	date: Date;
	date_utc: Date;
	modified: Date;
	modified_utc: Date;
	url: string;
	organizer: string;
	slug: string;
	website: string;
	global_id: string;
	global_id_lineage: Array<string>;
};
