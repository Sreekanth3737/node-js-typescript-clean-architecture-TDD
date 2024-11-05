#!/bin/bash

# Step 1: Initialize a new Node.js project
echo "Initializing a new Node.js project..."
npm init -y

# Step 2: Create essential directories
echo "Creating 'src' and 'test' directories..."
mkdir -p src test

# Step 3: Install TypeScript and development dependencies
echo "Installing development dependencies..."
npm install --save-dev typescript ts-node-dev tsconfig-paths @types/node \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier \
  eslint-plugin-prettier eslint-plugin-security jest ts-jest rimraf copyfiles \
  husky lint-staged git-commit-msg-linter @types/validator

# Step 4: Install testing and linting dependencies
echo "Installing testing and linting dependencies..."
npm install --save-dev @types/jest @types/jsonwebtoken @types/supertest supertest @shelf/jest-mongodb \
    @types/swagger-ui-express @types/cors @types/bcrypt

# Step 5: Install project dependencies
echo "Installing project dependencies..."
npm install express cors dotenv jsonwebtoken bcrypt swagger-ui-express validator npm-check

# Step 6: Create a TypeScript configuration file (tsconfig.json)
echo "Creating tsconfig.json..."
cat <<EOL > tsconfig.json
{
  "compilerOptions": {
    "target": "es2019",
    "moduleResolution": "node",
    "module": "commonjs",
    "lib": ["es2019"],
    "outDir": "dist",
    "strict": true,
    "sourceMap": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "resolveJsonModule": true,
    "alwaysStrict": true,
    "removeComments": true,
    "noImplicitReturns": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "baseUrl": ".",
    "paths": {
      "@src/*": ["./src/*"]
    },
    "rootDirs": ["./src"],
    "typeRoots": ["./node_modules/@types"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src"],
  "exclude":["node_modules"]
}
EOL

# Step 7: Configure Husky for git hooks
echo "Configuring Husky..."
npx husky install

# Optional: Add lint-staged configuration for pre-commit hooks
echo 'Adding lint-staged configuration...'
cat <<EOL > .lintstagedrc.json
{
  "*.ts": ["eslint --fix"]
}
EOL


# Step 9: Final message
echo "Project setup complete! You're ready to start development."
