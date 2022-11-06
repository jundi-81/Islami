export class Video {
  id: string;
  title: string;
  thumbnail: string;
}

export class Artist{
  id: number;
  title: string;
  img: string;
  url: string;
}

export class Album{
  artist: number;
  title: string;
  videos: Video[];
}
