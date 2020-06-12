--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public."playlists_Movies" DROP CONSTRAINT "playlists_Movies_fk1";
ALTER TABLE ONLY public."playlists_Movies" DROP CONSTRAINT "playlists_Movies_fk0";
ALTER TABLE ONLY public.playlists DROP CONSTRAINT playlists_pk;
ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pk;
ALTER TABLE public.playlists ALTER COLUMN "playlistId" DROP DEFAULT;
ALTER TABLE public.movies ALTER COLUMN "movieId" DROP DEFAULT;
DROP SEQUENCE public."playlists_playlistId_seq";
DROP TABLE public."playlists_Movies";
DROP TABLE public.playlists;
DROP SEQUENCE public."movies_movieId_seq";
DROP TABLE public.movies;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.movies (
    "movieId" integer NOT NULL,
    name text NOT NULL
);


--
-- Name: movies_movieId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."movies_movieId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: movies_movieId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."movies_movieId_seq" OWNED BY public.movies."movieId";


--
-- Name: playlists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.playlists (
    "playlistId" integer NOT NULL,
    name text NOT NULL
);


--
-- Name: playlists_Movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."playlists_Movies" (
    "playlistId" integer NOT NULL,
    "movieId" integer NOT NULL
);


--
-- Name: playlists_playlistId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."playlists_playlistId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: playlists_playlistId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."playlists_playlistId_seq" OWNED BY public.playlists."playlistId";


--
-- Name: movies movieId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN "movieId" SET DEFAULT nextval('public."movies_movieId_seq"'::regclass);


--
-- Name: playlists playlistId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlists ALTER COLUMN "playlistId" SET DEFAULT nextval('public."playlists_playlistId_seq"'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.movies ("movieId", name) FROM stdin;
1	Sweet Home Alabama
2	My Best Friends Wedding
3	The Family Stone
\.


--
-- Data for Name: playlists; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.playlists ("playlistId", name) FROM stdin;
\.


--
-- Data for Name: playlists_Movies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."playlists_Movies" ("playlistId", "movieId") FROM stdin;
\.


--
-- Name: movies_movieId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."movies_movieId_seq"', 3, true);


--
-- Name: playlists_playlistId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."playlists_playlistId_seq"', 1, false);


--
-- Name: movies movies_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pk PRIMARY KEY ("movieId");


--
-- Name: playlists playlists_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlists
    ADD CONSTRAINT playlists_pk PRIMARY KEY ("playlistId");


--
-- Name: playlists_Movies playlists_Movies_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."playlists_Movies"
    ADD CONSTRAINT "playlists_Movies_fk0" FOREIGN KEY ("playlistId") REFERENCES public.playlists("playlistId");


--
-- Name: playlists_Movies playlists_Movies_fk1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."playlists_Movies"
    ADD CONSTRAINT "playlists_Movies_fk1" FOREIGN KEY ("movieId") REFERENCES public.movies("movieId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

