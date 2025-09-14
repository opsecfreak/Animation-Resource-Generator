# AnimChar Studio 🎨

Welcome to AnimChar Studio, an AI-powered character and asset generator designed for animators and 3D artists. Describe your vision, generate stunning concept images, and export them for immediate use in creative software like Blender.

![AnimChar Studio Screenshot](https://storage.googleapis.com/aistudio-hosting/workspace-home/user-b7556758-3d18-479e-a841-118e770732d7/project-67a6e60b-6a9b-4357-a548-c2b6279f8263/files/AnimChar%20Studio.png)

## ✨ Features

- **AI-Powered Generation**: Leverages the Google Gemini API to turn your text descriptions into high-quality concept art.
- **Creative Presets**: Choose from presets like "Character," "Background," "Item," and more to get tailored results for your specific needs.
- **Advanced Controls**: Fine-tune your creations with options for art style, color palette, and negative prompts.
- **Custom Aspect Ratios**: Generate images in various aspect ratios (1:1, 16:9, 9:16, etc.) to fit your project's requirements.
- **Blender-Ready**: The "Character" preset generates images in a T-pose on a neutral background, perfect for using as modeling reference with Blender's "Images as Planes" addon.
- **Local Storage Gallery**: Your creations are automatically saved in your browser's local storage, so you can come back to them anytime.
- **Easy Export**: Download your generated images with a single click.

## 🚀 Tech Stack

- **Frontend**: [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Model**: [Google Gemini API (`imagen-4.0-generate-001`)](https://deepmind.google/technologies/gemini/)

## 🔧 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.
- A Google Gemini API Key. You can obtain one from [Google AI Studio](https://aistudio.google.com/).

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your-username/animchar-studio.git
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root of your project and add your API key:
    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```
5.  Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

## Usage

1.  **Select a Preset**: Choose a category that best fits your needs (e.g., Character, Background).
2.  **Describe Your Vision**: Write a detailed description of the asset you want to create in the text area. The more detail, the better!
3.  **Refine Your Prompt**: Use the optional Art Style, Color Palette, and Negative Prompt fields to gain more control.
4.  **Choose Aspect Ratio**: Select the desired dimensions for your image.
5.  **Generate**: Click the "Generate" button and watch the AI bring your idea to life. Four images will be generated per request.
6.  **Save or Delete**: Hover over any image in the gallery to download it or remove it from your collection.

## 💡 Prompting Tips & Examples

The quality of your output is directly related to the quality of your prompt. Here are some examples to guide you.

### Character

Focus on physical traits, clothing, equipment, and personality. Remember, this preset automatically asks for a T-pose on a neutral background.

**Example Prompt:**
```
A female elf rogue, athletic build, with long silver hair in a braid, piercing green eyes, and pointed ears. She wears dark leather armor with intricate silver clasps, a hooded cloak, and carries a pair of ornate daggers on her belt.
```
- **Art Style**: `Photorealistic`
- **Color Palette**: `Earthy Tones`
- **Negative Prompt**: `bulky armor, smiling`

*This prompt is effective because it gives concrete details about the character's appearance, equipment, and implies a serious personality.*

### Background

Describe the environment, mood, lighting, and key elements. Think like a set designer.

**Example Prompt:**
```
A sprawling, bio-luminescent alien jungle at night. Giant, glowing mushrooms cast an eerie blue light on strange, exotic plants. A cascading waterfall of shimmering liquid in the distance. The mood is mysterious and magical.
```
- **Art Style**: `Cartoon`
- **Color Palette**: `Neon Glow`
- **Negative Prompt**: `daytime, harsh shadows`

*This prompt works well because it establishes a clear time of day, atmosphere (mood), and specific visual elements (glowing mushrooms, waterfall).*

### Item

Be specific about the object's material, shape, details, and any magical effects. This preset helps isolate the object.

**Example Prompt:**
```
An ancient, leather-bound spellbook lying open on a stone table. The pages are yellowed and filled with glowing arcane symbols. A single, large amethyst crystal is embedded in the center of the cover.
```
- **Art Style**: `Watercolor`
- **Color Palette**: `Monochromatic` (with purple hues)
- **Negative Prompt**: `modern, clean, new`

*This prompt is successful because it details the item's materials (leather, stone, amethyst), state (open, yellowed), and special effects (glowing symbols).*

### Vehicle

Define the vehicle's type, style, condition, and key features. Think about its purpose and the world it belongs to.

**Example Prompt:**
```
A rugged, post-apocalyptic buggy. It's built from scrap metal, with large off-road tires, a reinforced roll cage, and rusted metal plates for armor. A powerful supercharged engine is exposed on the hood.
```
- **Art Style**: `Photorealistic`
- **Color Palette**: `Earthy Tones`
- **Negative Prompt**: `clean, shiny, new, futuristic`

*This prompt is effective because it clearly defines the vehicle's theme (post-apocalyptic), construction materials (scrap metal), and notable features (off-road tires, exposed engine).*


## 📜 License

Distributed under the MIT License. See `LICENSE.txt` for more information.
