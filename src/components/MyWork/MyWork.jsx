import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import { Button, Box, Modal, TextField } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import images
import photo1 from "../../assets/Images/photo1.jpg";
import photo2 from "../../assets/Images/photo2.jpg";
import photo3 from "../../assets/Images/photo3.jpg";
import photo4 from "../../assets/Images/Illu01.jpg";
import photo5 from "../../assets/Images/photo5.jpg";
import photo6 from "../../assets/Images/photo6.jpg";
import photo7 from "../../assets/Images/photo41.jpg";
import photo8 from "../../assets/Images/photo40.jpg";
import photo9 from "../../assets/Images/photo35.jpg";
import photo10 from "../../assets/Images/photo37.jpg";
import photo11 from "../../assets/Images/photo46.jpg";
import photo12 from "../../assets/Images/illus01.jpg";
import photo13 from "../../assets/Images/Inde02.jpg";
import photo14 from "../../assets/Images/Inde03.jpg";
import photo15 from "../../assets/Images/Inde04.jpg";
import photo16 from "../../assets/Images/photo38.jpg";
import photo17 from "../../assets/Images/photo39.jpg";
import photo18 from "../../assets/Images/photo7.jpg";
import photo19 from "../../assets/Images/Illu02.jpg";
import photo20 from "../../assets/Images/Illu03.jpg";
import photo21 from "../../assets/Images/photo8.jpg";
import photo22 from "../../assets/Images/photo9.jpg";
import photo23 from "../../assets/Images/photo11.jpg";

const works = [
  { id: 1, category: "Photography", src: photo1 },
  { id: 2, category: "Photography", src: photo2 },
  { id: 3, category: "Photography", src: photo3 },
  { id: 4, category: "Illustrator", src: photo4 },
  { id: 5, category: "Photography", src: photo5 },
  { id: 6, category: "Photography", src: photo6 },
  { id: 7, category: "Photography", src: photo7 },
  { id: 8, category: "Photography", src: photo8 },
  { id: 9, category: "Photography", src: photo9 },
  { id: 10, category: "Photography", src: photo10 },
  { id: 11, category: "Photography", src: photo11 },
  { id: 12, category: "InDesign", src: photo12 },
  { id: 13, category: "InDesign", src: photo13 },
  { id: 14, category: "InDesign", src: photo14 },
  { id: 15, category: "InDesign", src: photo15 },
  { id: 16, category: "Photography", src: photo16 },
  { id: 17, category: "Photography", src: photo17 },
  { id: 18, category: "Photography", src: photo18 },
  { id: 19, category: "Illustrator", src: photo19 },
  { id: 20, category: "Illustrator", src: photo20},
  { id: 21, category: "Photography", src: photo21 },
  { id: 22, category: "Photography", src: photo22 },
  { id: 23, category: "Photography", src: photo23 },

];

const categories = ["All", "Photography", "Illustrator", "InDesign"];

const MyWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (src) => {
    setSelectedImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredWorks = works.filter(
    (work) =>
      (selectedCategory === "All" || work.category === selectedCategory) &&
      work.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      {/* Navbar with Search and Reset */}
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          marginBottom: 3,
        }}
      >
        <Button onClick={handleReset} sx={{ minWidth: "40px" }}>
          <FaImages size={30} />
        </Button>
        <TextField
          type="text"
          placeholder="Search Photography, Illustrator, InDesign..."
          value={searchQuery}
          onChange={handleSearchChange}
          variant="outlined"
          size="small"
        />
      </Box> */}

      {/* Category Filter */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Engaging Section */}
      {/* <Box textAlign="center" marginBottom={4}>
        <h2>Explore My Creative Work</h2>
        <p>A curated gallery featuring my photography, Illustrator designs, and InDesign layouts.</p>
      </Box> */}

      {/* Masonry Grid with seamless margin */}
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={1.5}
        sx={{ marginLeft: "auto", marginRight: "auto", maxWidth: "90%" }}
      >
        {filteredWorks.map((work) => (
          <Box key={work.id} sx={{ cursor: "pointer", overflow: "hidden" }}>
            <LazyLoadImage
              src={work.src}
              alt={work.category}
              effect="blur"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
              }}
              onClick={() => handleOpen(work.src)}
            />
          </Box>
        ))}
      </Masonry>

      {/* Modal for Full View */}
      <Modal open={open} onClose={handleClose}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 2,
      borderRadius: "8px",
      maxWidth: "80vw", // Make the modal width responsive
      maxHeight: "80vh", // Prevents it from being too large
      overflow: "auto", // Allows scrolling if needed
    }}
  >
    {selectedImage && (
      <img
        src={selectedImage}
        alt="Selected Work"
        style={{
          width: "100%",
          maxHeight: "70vh", // Ensures it doesn't exceed viewport height
          objectFit: "contain", // Keeps aspect ratio
          borderRadius: "8px",
        }}
      />
    )}
  </Box>
</Modal>

    </Box>
  );
};

export default MyWork;
