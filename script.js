.about-container {
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 900px;
  margin: auto;
  padding: 60px 20px;
}

.profile-pic {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid white;
}

.about-text {
  flex: 1;
}

@media (max-width: 600px) {
  .about-container {
    flex-direction: column;
    text-align: center;
  }
}
