export type Song = {
    name: string;
    description: string;
    duration: number;
};

export type Playlist = {
    name: string;
    description: string;
    songs: Song[];
};

