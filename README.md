# Pokemon Champion Shared Types

Shared TypeScript types and interfaces for the Pokemon Champion project.

## Installation

```bash
npm install pokemon-champion-shared
```

## Usage

```typescript
import { Pokemon, PokemonFull, Team, User, ApiResponse } from 'pokemon-champion-shared';

// Lightweight Pokemon for list views
const pokemon: Pokemon = {
  id: 25,
  nationalNumber: '025',
  name: 'Pikachu',
  types: ['Electric'],
  ability1: 'Static',
  abilityHidden: 'Lightning Rod',
  imageUrl: 'https://example.com/pikachu.png',
  hpMax: 274,
  attackMax: 229,
  defenseMax: 196,
  spAtkMax: 218,
  spDefMax: 218,
  speedMax: 306,
  statTotal: 320
};

// Full Pokemon with details
const pokemonFull: PokemonFull = {
  ...pokemon,
  details: {
    id: 1,
    pokemonId: 25,
    species: 'Mouse Pokémon',
    height: '0.4 m',
    weight: '6.0 kg',
    hpBase: 35,
    hpMin: 200,
    attackBase: 55,
    attackMin: 103,
    // ... other base stats
  }
};
```

## Available Types

### Core Pokemon Types
- `Pokemon` - Lightweight Pokemon data for list views (includes max stats, abilities, types)
- `PokemonDetails` - Heavyweight Pokemon details (species, height, weight, base/min stats, forms, moves, evolution)
- `PokemonFull` - Complete Pokemon (combines Pokemon + PokemonDetails)
- `PokemonI18n` - Legacy i18n Pokemon structure (for future expansion)
- `PokemonForm` - Alternate forms with stats and abilities
- `StatValues` - Base/min/max stat values
- `BaseStats` - Complete stat spread with total

### Team Building Types
- `Team` - Team composition with strategy and metadata
- `TeamPokemon` - Individual Pokemon in a team (level, EVs, IVs, nature, ability, moves, item)
- `StatSpread` - Individual stat values (HP, Atk, Def, SpA, SpD, Speed)

### Move Types
- `Move` - Basic move information
- `LevelUpMove` - Moves learned by level up
- `TMMove` - TM/HM moves
- `MoveI18n` - Localized move data
- `MovesByMethod` - Moves grouped by learning method
- `GameVersionMoves` - Moves per game version
- `GenerationMoves` - Moves per generation

### Data Types
- `Ability` - Pokemon abilities with localized names/descriptions
- `Item` - Pokemon items with localized names/descriptions
- `Nature` - Pokemon natures with stat modifiers
- `PokemonType` - Type information with identifiers

### User & Social Types
- `User` - User account with auth, preferences, premium status, linked accounts
- `LinkedAccount` - OAuth linked accounts (Google, Twitter)
- `NewsArticle` - News content with localized text
- `Comment` - Team comments with threading support

### Utility Types
- `LocalizedText` - Multi-language text support (en, ja, zh-CN, zh-TW)
- `ApiResponse<T>` - Standardized API response format
- `PaginatedResponse<T>` - Paginated data response
- `Language` - Supported language codes: 'en' | 'ja' | 'zh-CN' | 'zh-TW'
- `TierRank` - Pokemon tier rankings: 'S' | 'A' | 'B' | 'C' | 'D' | 'UNRANKED'

## Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the package**
   ```bash
   npm run build
   ```

3. **Watch for changes**
   ```bash
   npm run dev
   ```

## Publishing

The package is automatically published to npm when changes are pushed to the main branch.

For manual publishing:
```bash
npm run build
npm publish --access public
```

## Versioning

This package follows semantic versioning. Update the version in `package.json` before publishing:

- Patch (1.0.1): Bug fixes and small changes
- Minor (1.1.0): New features that don't break existing code
- Major (2.0.0): Breaking changes

## Usage in Other Repositories

### Backend (Express.js)
```typescript
import { Pokemon, ApiResponse } from 'pokemon-champion-shared';

app.get('/api/pokemon/:id', (req, res) => {
  const response: ApiResponse<Pokemon> = {
    success: true,
    data: pokemon
  };
  res.json(response);
});
```

### Frontend (Next.js)
```typescript
import { Pokemon, Team } from 'pokemon-champion-shared';

interface TeamBuilderProps {
  pokemon: Pokemon[];
  onTeamCreate: (team: Team) => void;
}
```