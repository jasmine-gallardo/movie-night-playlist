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

ALTER TABLE ONLY public.users DROP CONSTRAINT users_pk;
ALTER TABLE ONLY public.playlists DROP CONSTRAINT playlists_pk;
ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pk;
ALTER TABLE public.users ALTER COLUMN "userId" DROP DEFAULT;
ALTER TABLE public.playlists ALTER COLUMN "playlistId" DROP DEFAULT;
ALTER TABLE public.movies ALTER COLUMN "movieId" DROP DEFAULT;
DROP SEQUENCE public."users_userId_seq";
DROP TABLE public.users_playlists;
DROP TABLE public.users;
DROP SEQUENCE public."playlists_playlistId_seq";
DROP TABLE public.playlists_movies;
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
-- Name: playlists_movies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.playlists_movies (
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
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" integer NOT NULL,
    name text NOT NULL
);


--
-- Name: users_playlists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users_playlists (
    "playlistId" integer NOT NULL,
    "userId" integer NOT NULL
);


--
-- Name: users_userId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."users_userId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_userId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."users_userId_seq" OWNED BY public.users."userId";


--
-- Name: movies movieId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.movies ALTER COLUMN "movieId" SET DEFAULT nextval('public."movies_movieId_seq"'::regclass);


--
-- Name: playlists playlistId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.playlists ALTER COLUMN "playlistId" SET DEFAULT nextval('public."playlists_playlistId_seq"'::regclass);


--
-- Name: users userId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN "userId" SET DEFAULT nextval('public."users_userId_seq"'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.movies ("movieId", name) FROM stdin;
1	Sweet Home Alabama
2	My Best Friends Wedding
3	The Family Stone
4	The Holiday
\.


--
-- Data for Name: playlists; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.playlists ("playlistId", name) FROM stdin;
1	Romantic Comedies
2	Sci-Fi
3	Moms Playlist
4	Halloween
5	Kids
6	Bruce Willis
\.


--
-- Data for Name: playlists_movies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.playlists_movies ("playlistId", "movieId") FROM stdin;
1	1
1	2
1	3
1	4
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users ("userId", name) FROM stdin;
1	Riki
2	Lisa
3	Jasmine
\.


--
-- Data for Name: users_playlists; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users_playlists ("playlistId", "userId") FROM stdin;
3	1
3	2
3	3
3	4
3	5
3	6
\.


--
-- Name: movies_movieId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."movies_movieId_seq"', 1, false);


--
-- Name: playlists_playlistId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."playlists_playlistId_seq"', 1, false);


--
-- Name: users_userId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."users_userId_seq"', 1, false);


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
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY ("userId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--
