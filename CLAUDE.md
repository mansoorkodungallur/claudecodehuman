# CLAUDE.md

> **Purpose**: This file provides context, conventions, and guidelines for AI assistants (like Claude) working with this codebase. It helps maintain consistency, quality, and efficiency when AI tools assist with development.

**Last Updated**: 2025-11-21
**Repository**: mansoorkodungallur/claudecodehuman

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Codebase Structure](#codebase-structure)
3. [Development Workflow](#development-workflow)
4. [Coding Conventions](#coding-conventions)
5. [Testing Strategy](#testing-strategy)
6. [Git & Branch Management](#git--branch-management)
7. [AI Assistant Guidelines](#ai-assistant-guidelines)
8. [Common Tasks & Commands](#common-tasks--commands)
9. [Troubleshooting](#troubleshooting)

---

## Project Overview

### What This Project Does
<!-- TODO: Add project description -->
_This section should describe the purpose, goals, and main functionality of the project._

### Tech Stack
<!-- TODO: Add technology stack -->
- **Language(s)**: _To be determined_
- **Framework(s)**: _To be determined_
- **Build Tools**: _To be determined_
- **Package Manager**: _To be determined_
- **Testing**: _To be determined_

### Key Dependencies
<!-- TODO: List major dependencies -->
_List critical dependencies and their purposes._

---

## Codebase Structure

### Directory Layout
```
.
├── .git/                 # Git repository metadata
└── CLAUDE.md            # This file
```

<!-- TODO: Update as project structure develops -->

### Architecture Patterns
_To be documented as the project architecture emerges._

**Key Principles**:
- Maintain clear separation of concerns
- Follow established design patterns consistently
- Keep modules loosely coupled and highly cohesive

---

## Development Workflow

### Setting Up the Development Environment

```bash
# Clone the repository
git clone <repository-url>
cd claudecodehuman

# TODO: Add setup steps as they're defined
# Examples:
# npm install
# pip install -r requirements.txt
# docker-compose up -d
```

### Development Process

1. **Create a feature branch**: Follow the branch naming convention (see [Git & Branch Management](#git--branch-management))
2. **Make changes**: Follow coding conventions and write tests
3. **Run tests**: Ensure all tests pass before committing
4. **Commit changes**: Write clear, descriptive commit messages
5. **Push to remote**: Use `git push -u origin <branch-name>`
6. **Create pull request**: Provide context and link related issues

### Pre-commit Checklist

- [ ] Code follows project conventions
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] No security vulnerabilities introduced
- [ ] No secrets or credentials committed
- [ ] Code is properly formatted/linted

---

## Coding Conventions

### General Principles

1. **Readability First**: Code should be self-documenting with clear variable and function names
2. **DRY (Don't Repeat Yourself)**: Extract repeated logic into reusable functions
3. **KISS (Keep It Simple, Stupid)**: Prefer simple solutions over clever ones
4. **YAGNI (You Aren't Gonna Need It)**: Don't add functionality until it's needed

### Code Style

<!-- TODO: Add language-specific style guides -->

**General Rules**:
- Use meaningful, descriptive names for variables, functions, and classes
- Keep functions small and focused on a single responsibility
- Comment complex logic, but prefer self-documenting code
- Handle errors explicitly and gracefully
- Avoid magic numbers - use named constants

### Security Best Practices

**CRITICAL**: Always check for and prevent:
- SQL Injection
- Cross-Site Scripting (XSS)
- Command Injection
- Path Traversal
- Insecure Deserialization
- Authentication/Authorization bypasses
- Secrets in code or version control
- Dependency vulnerabilities

Use environment variables for sensitive configuration.

---

## Testing Strategy

### Test Organization
<!-- TODO: Define test structure -->

**Test Types**:
- **Unit Tests**: Test individual functions/methods in isolation
- **Integration Tests**: Test component interactions
- **End-to-End Tests**: Test complete user workflows

### Running Tests

```bash
# TODO: Add test commands
# Examples:
# npm test
# pytest
# cargo test
```

### Writing Tests

- Test both happy paths and edge cases
- Use descriptive test names that explain what's being tested
- Keep tests isolated and independent
- Mock external dependencies
- Aim for high coverage on critical paths

---

## Git & Branch Management

### Branch Naming Convention

```
<type>/<description>
```

**Types**:
- `feature/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `test/` - Test additions/updates
- `chore/` - Maintenance tasks
- `claude/` - AI assistant development branches

**Examples**:
- `feature/user-authentication`
- `fix/memory-leak-in-parser`
- `refactor/database-layer`

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

**Types**: feat, fix, docs, style, refactor, test, chore

**Example**:
```
feat: add user authentication system

Implement JWT-based authentication with refresh tokens.
Includes login, logout, and token refresh endpoints.

Closes #123
```

### Git Workflow

1. Keep commits atomic and focused
2. Write clear commit messages
3. Rebase feature branches on main before merging
4. Never force push to main/shared branches
5. Review git status and diff before committing

---

## AI Assistant Guidelines

### When Working with This Codebase

#### Discovery & Analysis

1. **Explore Before Acting**: Use exploration tools to understand the codebase before making changes
2. **Read Existing Code**: Check for existing implementations before creating new ones
3. **Understand Context**: Review related files and dependencies
4. **Check Tests**: Look at existing tests to understand expected behavior

#### Making Changes

1. **Plan First**: For complex tasks, create a todo list to track progress
2. **Small Incremental Changes**: Make focused changes that are easy to review
3. **Test After Changes**: Run tests and verify functionality
4. **No Breaking Changes**: Ensure backward compatibility unless explicitly requested
5. **Security First**: Always consider security implications

#### Code Quality

1. **Follow Existing Patterns**: Match the style and patterns already in use
2. **Don't Over-Engineer**: Keep solutions simple and maintainable
3. **Clean Up**: Remove unused code, fix formatting issues
4. **Document Complex Logic**: Add comments for non-obvious implementations

#### Communication

1. **Explain Changes**: Clearly describe what changes were made and why
2. **Reference Locations**: Use `file_path:line_number` when referencing code
3. **Report Issues**: If you discover bugs or issues, report them clearly
4. **Ask When Uncertain**: Don't guess - ask for clarification

### Tool Usage Preferences

- **File Operations**: Use Read/Edit/Write tools, not bash commands
- **Search**: Use Grep for content search, Glob for file patterns
- **Exploration**: Use Task tool with Explore agent for open-ended discovery
- **Parallel Operations**: Make multiple independent tool calls simultaneously
- **Testing**: Always run tests after making changes

### What to Avoid

- ❌ Creating unnecessary files (especially documentation)
- ❌ Committing without explicit user request
- ❌ Pushing to wrong branches
- ❌ Introducing security vulnerabilities
- ❌ Breaking existing functionality
- ❌ Making assumptions without verification
- ❌ Using emojis unless requested
- ❌ Over-the-top praise or validation

---

## Common Tasks & Commands

### Development Commands

```bash
# TODO: Add project-specific commands as they're defined

# Example placeholders:
# Start development server
# npm run dev

# Build for production
# npm run build

# Run linter
# npm run lint

# Format code
# npm run format

# Run tests
# npm test
```

### Useful Git Commands

```bash
# Check current status
git status

# View changes
git diff

# Create and switch to new branch
git checkout -b <branch-name>

# Stage changes
git add <file>

# Commit changes
git commit -m "message"

# Push to remote (with tracking)
git push -u origin <branch-name>

# Fetch latest changes
git fetch origin

# Update current branch
git pull origin <branch-name>

# View commit history
git log --oneline -10
```

---

## Troubleshooting

### Common Issues

<!-- TODO: Document common issues and solutions as they arise -->

**Issue**: Git push fails with 403 error
**Solution**: Ensure branch name starts with 'claude/' and matches session ID, use `git push -u origin <branch-name>`

**Issue**: Tests failing after changes
**Solution**: Review test output, check for breaking changes, ensure all dependencies are installed

### Getting Help

- Check this CLAUDE.md file for conventions and guidelines
- Review README.md for project-specific information
- Look at existing code for examples and patterns
- Check git history for context on previous changes
- Ask the user for clarification when needed

---

## Project Evolution

This CLAUDE.md file should be updated as the project grows and evolves. Key times to update:

- When new technologies or frameworks are added
- When architectural patterns are established
- When coding conventions are defined or changed
- When new development workflows are introduced
- When common issues and solutions are discovered
- When the project structure changes significantly

**Next Steps for This File**:
1. Add project description and purpose
2. Document technology stack as it's chosen
3. Define directory structure as code is added
4. Establish coding conventions for the chosen language(s)
5. Set up testing framework and document test commands
6. Add project-specific development commands
7. Document common issues and troubleshooting steps

---

## Additional Resources

<!-- TODO: Add links to relevant documentation -->

- Project README: _To be created_
- API Documentation: _To be created_
- Contributing Guidelines: _To be created_
- Issue Tracker: https://github.com/mansoorkodungallur/claudecodehuman/issues

---

**Note**: This is a living document. AI assistants should help keep it updated as the project evolves.
