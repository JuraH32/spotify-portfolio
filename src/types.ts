export type Song = {
    name: string;
    artist?: string;
    description: Description;
    lengthStart?: string;
    lengthEnd?: string;
    imageUrl?: string;
    location?: string;
    github?: string;
};

export type Playlist = {
    name: string;
    description: string;
    songs: Song[];
    imageUrl?: string;
};

export type Description = {
    bulletPoints: string[];
    link?: string;
    tags?: TagType[];
}

export type User = {
    name: string;
    imageUrl?: string;
    playlists: Playlist[];
    linkedIn?: string;
    github?: string;
};

export type TagType = {
    text: string;
    color: string;
    help?: string;
}