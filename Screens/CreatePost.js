import React, { useState } from "react";
import { Text, TextInput, Button } from "react-native";

const CreatePost = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the text, such as posting it to a server.
  };

  return (
    <View>
      <TextInput
        placeholder="What's on your mind?"
        onChangeText={handleInputChange}
      />
      <Button title="Post" onPress={handleSubmit} />
    </View>
  );
};

export default CreatePost;
