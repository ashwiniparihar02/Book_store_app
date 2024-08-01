// import book from "../model/bookmodel.js"

// export const getBook=async(req,res)=>{
//     try{
//         const books=await book.find()
//         res.status(200).json(books)
//     }
//     catch(error){
//     console.log("Error",error)
//     res.status(500).json(error);
//     }
// }

import book from "../model/bookmodel.js"; // Ensure file extension is .js

export const getBook = async (req, res) => {
    try {
        const books = await book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
