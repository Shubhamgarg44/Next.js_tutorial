"use server"
import fs from "fs/promises";

export const submitAction = async(e) => {
    console.log(e.get("name"), e.get("add"))
    await fs.writeFile("shubham.txt", "hey hello")
  }