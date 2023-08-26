import { Request, RequestHandler, Response } from "express";
import * as ArtistDao from './artists.dao';

export const readArtists: RequestHandler =async (req:Request, res: Response) => {
    try {
        const artists = await ArtistDao.readArtists();

        res.status(200).json(artists);
    } catch(error) {
        console.error('[artists.controller][readArtists][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching artists'
        })
    }
};

const ARTISTS = [
    {id: 1, name: 'The Beatles'},
    {id: 2, name: 'The Who'},
    {id: 3, name: 'Abba'}
];

export const getArtists = (req: Request, res:Response) => {
    res.send(ARTISTS);
};