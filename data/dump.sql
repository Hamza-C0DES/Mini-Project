--
-- PostgreSQL database dump
--

\restrict H7acGrOyMby7xi38cJe60QujbW4mRT2pwp2RurQPuvDVnR3ClaDBKYYlfp7LkKM

-- Dumped from database version 14.7 (Homebrew)
-- Dumped by pg_dump version 18.4

-- Started on 2026-07-02 13:44:57 EDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE celebritychain;
--
-- TOC entry 3623 (class 1262 OID 17529)
-- Name: celebritychain; Type: DATABASE; Schema: -; Owner: grantterdoslavich
--

CREATE DATABASE celebritychain WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';


ALTER DATABASE celebritychain OWNER TO grantterdoslavich;

\unrestrict H7acGrOyMby7xi38cJe60QujbW4mRT2pwp2RurQPuvDVnR3ClaDBKYYlfp7LkKM
\connect celebritychain
\restrict H7acGrOyMby7xi38cJe60QujbW4mRT2pwp2RurQPuvDVnR3ClaDBKYYlfp7LkKM

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 17579)
-- Name: public; Type: SCHEMA; Schema: -; Owner: grantterdoslavich
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO grantterdoslavich;

--
-- TOC entry 3624 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: grantterdoslavich
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 213 (class 1259 OID 17610)
-- Name: Answers; Type: TABLE; Schema: public; Owner: grantterdoslavich
--

CREATE TABLE public."Answers" (
    id integer NOT NULL,
    celebrity text NOT NULL,
    username text NOT NULL,
    "gameId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Answers" OWNER TO grantterdoslavich;

--
-- TOC entry 212 (class 1259 OID 17609)
-- Name: Answers_id_seq; Type: SEQUENCE; Schema: public; Owner: grantterdoslavich
--

CREATE SEQUENCE public."Answers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Answers_id_seq" OWNER TO grantterdoslavich;

--
-- TOC entry 3626 (class 0 OID 0)
-- Dependencies: 212
-- Name: Answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: grantterdoslavich
--

ALTER SEQUENCE public."Answers_id_seq" OWNED BY public."Answers".id;


--
-- TOC entry 211 (class 1259 OID 17601)
-- Name: Game; Type: TABLE; Schema: public; Owner: grantterdoslavich
--

CREATE TABLE public."Game" (
    id integer NOT NULL,
    roomcode text NOT NULL,
    celebrity text NOT NULL
);


ALTER TABLE public."Game" OWNER TO grantterdoslavich;

--
-- TOC entry 210 (class 1259 OID 17600)
-- Name: Game_id_seq; Type: SEQUENCE; Schema: public; Owner: grantterdoslavich
--

CREATE SEQUENCE public."Game_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Game_id_seq" OWNER TO grantterdoslavich;

--
-- TOC entry 3627 (class 0 OID 0)
-- Dependencies: 210
-- Name: Game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: grantterdoslavich
--

ALTER SEQUENCE public."Game_id_seq" OWNED BY public."Game".id;


--
-- TOC entry 209 (class 1259 OID 17580)
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: grantterdoslavich
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO grantterdoslavich;

--
-- TOC entry 3464 (class 2604 OID 17613)
-- Name: Answers id; Type: DEFAULT; Schema: public; Owner: grantterdoslavich
--

ALTER TABLE ONLY public."Answers" ALTER COLUMN id SET DEFAULT nextval('public."Answers_id_seq"'::regclass);


--
-- TOC entry 3463 (class 2604 OID 17604)
-- Name: Game id; Type: DEFAULT; Schema: public; Owner: grantterdoslavich
--

ALTER TABLE ONLY public."Game" ALTER COLUMN id SET DEFAULT nextval('public."Game_id_seq"'::regclass);


--
-- TOC entry 3617 (class 0 OID 17610)
-- Dependencies: 213
-- Data for Name: Answers; Type: TABLE DATA; Schema: public; Owner: grantterdoslavich
--

COPY public."Answers" (id, celebrity, username, "gameId", "createdAt") FROM stdin;
\.


--
-- TOC entry 3615 (class 0 OID 17601)
-- Dependencies: 211
-- Data for Name: Game; Type: TABLE DATA; Schema: public; Owner: grantterdoslavich
--

COPY public."Game" (id, roomcode, celebrity) FROM stdin;
\.


--
-- TOC entry 3613 (class 0 OID 17580)
-- Dependencies: 209
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: grantterdoslavich
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
57a164fe-0202-4515-987e-ed5134ca8b29	8ddcfae5fdffc7ef3ee0ef7b241b75e56e943a8d2710e2765d849270e9760c24	2026-07-02 13:08:33.986738-04	20260702170833_grant	\N	\N	2026-07-02 13:08:33.894177-04	1
c29f6451-544f-42ea-91c7-2ba680487cfa	67631b970a971281de9c8a695735c29d86e2e99aa7139aabdce09f95dab2b6d0	2026-07-02 13:22:55.517237-04	20260702172254_grant	\N	\N	2026-07-02 13:22:55.148832-04	1
\.


--
-- TOC entry 3628 (class 0 OID 0)
-- Dependencies: 212
-- Name: Answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: grantterdoslavich
--

SELECT pg_catalog.setval('public."Answers_id_seq"', 1, false);


--
-- TOC entry 3629 (class 0 OID 0)
-- Dependencies: 210
-- Name: Game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: grantterdoslavich
--

SELECT pg_catalog.setval('public."Game_id_seq"', 1, false);


--
-- TOC entry 3472 (class 2606 OID 17618)
-- Name: Answers Answers_pkey; Type: CONSTRAINT; Schema: public; Owner: grantterdoslavich
--

ALTER TABLE ONLY public."Answers"
    ADD CONSTRAINT "Answers_pkey" PRIMARY KEY (id);


--
-- TOC entry 3469 (class 2606 OID 17608)
-- Name: Game Game_pkey; Type: CONSTRAINT; Schema: public; Owner: grantterdoslavich
--

ALTER TABLE ONLY public."Game"
    ADD CONSTRAINT "Game_pkey" PRIMARY KEY (id);


--
-- TOC entry 3467 (class 2606 OID 17588)
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: grantterdoslavich
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- TOC entry 3470 (class 1259 OID 17619)
-- Name: Answers_gameId_celebrity_key; Type: INDEX; Schema: public; Owner: grantterdoslavich
--

CREATE UNIQUE INDEX "Answers_gameId_celebrity_key" ON public."Answers" USING btree ("gameId", celebrity);


--
-- TOC entry 3473 (class 2606 OID 17620)
-- Name: Answers Answers_gameId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: grantterdoslavich
--

ALTER TABLE ONLY public."Answers"
    ADD CONSTRAINT "Answers_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES public."Game"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3625 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: grantterdoslavich
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


-- Completed on 2026-07-02 13:44:57 EDT

--
-- PostgreSQL database dump complete
--

\unrestrict H7acGrOyMby7xi38cJe60QujbW4mRT2pwp2RurQPuvDVnR3ClaDBKYYlfp7LkKM

