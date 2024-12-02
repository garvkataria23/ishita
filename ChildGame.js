import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChildGame = () => {
        const ChildGame = () => {
                useEffect(() => {
                        // Run the Pygame script using a server-side Python setup
                        fetch("http://localhost:5000/start-game").catch((err) =>
                            console.error("Failed to start game:", err)
                        );
                }, []);

                return (
                    <div style={{ textAlign: "center", marginTop: "20%" }}>
                            <h1>Launching the Game...</h1>
                            <p>Ensure the Python server is running!</p>
                    </div>
                );
        };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to SafeGame!</Text>
            import pygame
            import random

            # Initialize Pygame
            pygame.init()

            # Set up display
            screen_width = 800
            screen_height = 600
            screen = pygame.display.set_mode((screen_width, screen_height))
            pygame.display.set_caption("Catch the Fruit")

            # Colors
            WHITE = (255, 255, 255)
            BLACK = (0, 0, 0)
            RED = (255, 0, 0)

            # Set up assets
            basket_width = 100
            basket_height = 50
            basket = pygame.image.load('basket.png')  # Add a basket image (optional)
            basket = pygame.transform.scale(basket, (basket_width, basket_height))

            fruit_width = 50
            fruit_height = 50
            fruit = pygame.image.load('apple.png')  # Add a fruit image (optional)
            fruit = pygame.transform.scale(fruit, (fruit_width, fruit_height))

            # Basket initial position
            basket_x = screen_width // 2 - basket_width // 2
            basket_y = screen_height - basket_height - 10

            # Fruit initial position
            fruit_x = random.randint(0, screen_width - fruit_width)
            fruit_y = -50
            fruit_speed = 5

            # Score
            score = 0

            # Font
            font = pygame.font.Font(None, 36)

            # Main game loop
            running = True
            while running:
            for event in pygame.event.get():
            if event.type == pygame.QUIT:
            running = False

            # Control the basket
            keys = pygame.key.get_pressed()
            if keys[pygame.K_LEFT] and basket_x > 0:
            basket_x -= 10
            if keys[pygame.K_RIGHT] and basket_x < screen_width - basket_width:
            basket_x += 10


            # Move the fruit
            fruit_y += fruit_speed

            # Check for collision
            if (fruit_y + fruit_height >= basket_y and
            basket_x < fruit_x + fruit_width and
            basket_x + basket_width > fruit_x):
            score += 1
            fruit_x = random.randint(0, screen_width - fruit_width)
            fruit_y = -50
            fruit_speed += 0.5  # Increase speed to make it more challenging

            # Reset fruit if it falls below the screen
            if fruit_y > screen_height:
            fruit_x = random.randint(0, screen_width - fruit_width)
            fruit_y = -50

            # Fill screen with white
            screen.fill(WHITE)

            # Draw basket and fruit
            screen.blit(basket, (basket_x, basket_y))
            screen.blit(fruit, (fruit_x, fruit_y))

            # Display the score
            score_text = font.render(f"Score: {score}", True, BLACK)
            screen.blit(score_text, (10, 10))

            # Update the display
            pygame.display.flip()

            # Frame rate
            pygame.time.Clock().tick(30)

            # Quit Pygame
            pygame.quit()

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
});

export default ChildGame;

