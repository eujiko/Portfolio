import React, { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
  Link,
  Modal,
  Button,
} from "@mui/material";
import profilePic from "../../assets/Images/eujiko.jpg";
import sardonyx from "../../assets/Images/sardonyx.png";
import tabloid from "../../assets/Images/tabloid.png";
import qoutes from "../../assets/Images/quotes.jpg";
import sweetness from "../../assets/Images/sweetness.png";

function NewsFeed() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      user: "Jeanson 'Eujiko' Acal",
      profilePic: profilePic,
      date: "January 12, 2025",
      caption: "'Embracing the beauty of the little things. Every detail matters.✨👌",
      link: "https://myportfolio.com/project1",
      thumbnail: qoutes,
    },
    {
      id: 2,
      user: "Jeanson 'Eujiko' Acal",
      profilePic: profilePic,
      date: "January 12, 2025",
      caption: "'Sweet Time: Aesthetic Branding for a Local Bakery' This logo and packaging design were crafted for Sweet Time, a small homemade bakery business. The warm tones, wheat emblem, and inviting typography emphasize the comforting and homemade nature of their baked goods. The design perfectly balances charm and professionalism, creating a memorable identity for the brand.😎🙌",
      link: "https://myportfolio.com/project1",
      thumbnail: sweetness,
    },
    {
      id: 3,
      user: "Jeanson 'Eujiko' Acal",
      profilePic: profilePic,
      date: "January 12, 2025",
      caption: "#Vibrant Colors, Dynamic Spirit! Showcasing the creativity and energy of Mindanao Mission Academy intramurals through these bold and eye-catching sports shirt designs.",
      link: "https://myportfolio.com/project1",
      thumbnail: sardonyx,
    },
    {
      id: 4,
      user: "Jeanson 'Eujiko' Acal",
      profilePic: profilePic,
      date: "January 10, 2025",
      caption:
        "As the graphic artist representing Looc National High School, I am honored to have received the Best Layout award in the English Category at the 2024 Division Schools Press Conference Tabloid Making Contest, standing out among 33 competing schools. Our team's collective efforts also earned us an impressive 3rd place overall.",
      link: "https://myportfolio.com/project2",
      thumbnail: tabloid,
    },
  ];

  const handleOpenModal = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return `${words.slice(0, wordLimit).join(" ")}...`;
    }
    return text;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
      }}
      id="feed"
    >
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{
            width: {
              xs: "100%",
              sm: "80%",
              md: "60%",
            },
            maxWidth: "800px",
            margin: "auto",
            marginBottom: "24px",
            backgroundColor: "background.paper",
            boxShadow: 3,
            borderRadius: 2,
            cursor: "pointer",
          }}
          onClick={() => handleOpenModal(post)}
        >
          <CardHeader
            avatar={<Avatar src={post.profilePic} alt={post.user} />}
            title={post.user}
            subheader={post.date}
          />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              {truncateText(post.caption, 20)}
              {post.caption.split(" ").length > 20 && (
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => handleOpenModal(post)}
                  sx={{ marginLeft: "8px" }}
                >
                  See More
                </Button>
              )}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              height: "300px",
              objectFit: "cover",
            }}
            image={post.thumbnail}
            alt="Project Thumbnail"
          />
        </Card>
      ))}

      {selectedPost && (
        <Modal
          open={!!selectedPost}
          onClose={handleCloseModal}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: 3,
              maxHeight: "90vh",
              overflowY: "auto",
              width: "90%",
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: "16px",
                right: "16px",
                zIndex: 1,
              }}
            >
              Close
            </Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Avatar
                src={selectedPost.profilePic}
                alt={selectedPost.user}
                sx={{ width: 48, height: 48, marginRight: "16px" }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {selectedPost.user}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {selectedPost.date}
                </Typography>
              </Box>
            </Box>

            <CardMedia
              component="img"
              sx={{
                height: "300px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
              image={selectedPost.thumbnail}
              alt="Project Thumbnail in Modal"
            />
            <Typography variant="body1" gutterBottom>
              {selectedPost.caption}
            </Typography>
            {/* <Link
              href={selectedPost.link}
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{ color: "primary.main" }}
            >
              View Project
            </Link> */}
          </Box>
        </Modal>
      )}
    </Box>
  );
}

export default NewsFeed;
