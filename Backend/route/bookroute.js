// import express from 'express'
// import { getBook } from '../controller/bookcontroller.js'

// const router=express.Router()
// router.get("/",getBook);

// export default router;

import express from 'express';
import { getBook } from '../controller/bookcontroller.js'; // Ensure file extension is .js

const router = express.Router();

router.get("/", getBook);

export default router;
