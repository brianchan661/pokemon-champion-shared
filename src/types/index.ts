// Core shared types for Pokemon Champion project

export interface LocalizedText {
  en: string;
  ja: string;
  'zh-CN'?: string;
  'zh-TW'?: string;
}

// Simplified Pokemon for MVP (List View - Lightweight)
export interface Pokemon {
  id: number;
  nationalNumber: string;
  name: string;
  types: string[];
  ability1: string;        // Primary ability identifier (required)
  ability2?: string;       // Alternate ability identifier (optional)
  abilityHidden?: string;  // Hidden ability identifier (optional)
  imageUrl?: string;
  hpMax: number;
  attackMax: number;
  defenseMax: number;
  spAtkMax: number;
  spDefMax: number;
  speedMax: number;
  statTotal: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Pokemon Details (Detail View - Heavyweight)
export interface PokemonDetails {
  id: number;
  pokemonId: number;
  species?: string;
  height?: string;
  weight?: string;
  hpBase: number;
  hpMin: number;
  attackBase: number;
  attackMin: number;
  defenseBase: number;
  defenseMin: number;
  spAtkBase: number;
  spAtkMin: number;
  spDefBase: number;
  spDefMin: number;
  speedBase: number;
  speedMin: number;
  forms?: PokemonForm[];
  evolutionChain?: any;
  movesByGeneration?: GenerationMoves[];
  scrapedAt?: Date;
}

// Full Pokemon (combines both tables for detail page)
export interface PokemonFull extends Pokemon {
  details?: PokemonDetails;
}

// Supporting types for Pokemon Details
export interface StatValues {
  base: number;
  min: number;
  max: number;
}

export interface BaseStats {
  hp: StatValues;
  attack: StatValues;
  defense: StatValues;
  spAtk: StatValues;
  spDef: StatValues;
  speed: StatValues;
  total: number;
}

export interface PokemonForm {
  formName: string;
  types: string[];
  abilities: string[];
  baseStats: BaseStats;
  imageUrl: string;
}

export interface Move {
  name: string;
  type: string;
  category: string;
  power: string;
  accuracy: string;
}

export interface LevelUpMove extends Move {
  level: string;
}

export interface TMMove extends Move {
  tm: string;
}

export interface MovesByMethod {
  moves: LevelUpMove[];
  evolutionMoves: Move[];
  eggMoves: Move[];
  tmMoves: TMMove[];
  hmMoves: TMMove[];
}

export interface GameVersionMoves {
  version: string;
  movesByMethod: MovesByMethod;
}

export interface GenerationMoves {
  generation: string;
  gameVersions: GameVersionMoves[];
}

// Legacy Pokemon interface (for future i18n expansion)
export interface PokemonI18n {
  id: number;
  nationalDexNumber: number;
  name: LocalizedText;
  description: LocalizedText;
  types: PokemonType[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: Ability[];
  moves: Move[];
  generation: number;
  tier: TierRank;
  height?: number;
  weight?: number;
  imageUrl: string;
}

export interface PokemonType {
  id: number;
  name: LocalizedText;
  identifier: string;
}

export interface Ability {
  id: number;
  name: LocalizedText;
  description: LocalizedText;
  identifier: string;
}

export interface MoveI18n {
  id: number;
  name: LocalizedText;
  description: LocalizedText;
  type: PokemonType;
  power?: number;
  accuracy?: number;
  pp: number;
}

export interface Item {
  id: number;
  name: LocalizedText;
  description: LocalizedText;
  identifier: string;
}

export interface Nature {
  id: number;
  name: LocalizedText;
  increasedStat?: string;
  decreasedStat?: string;
}

export interface StatSpread {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface TeamPokemon {
  pokemonId: number;
  level: number; // 1-100, user configurable

  // Competitive fields
  abilityIdentifier: string;
  moves: number[]; // Array of 1-4 move IDs
  itemId?: number;
  natureId: number;

  evs: StatSpread; // 0-252 per stat, max 510 total
  ivs: StatSpread; // 0-31 per stat, default 31

  // Generation-specific features
  teraType?: string; // Gen 9 Tera Type
  gigantamaxFactor?: boolean; // Gen 8 Gigantamax
  megaEvolution?: string; // Gen 6 (mega stone identifier)

  // Extended properties (populated when fetching from API)
  pokemonData?: {
    id: number;
    nationalNumber: string;
    name: string;
    types: string[];
    imageUrl?: string;
  };
  movesData?: Array<{
    id: number;
    identifier: string;
    name: string;
    type: string;
    category: string;
    power: number | null;
    accuracy: number | null;
  }>;
  itemData?: {
    id: number;
    identifier: string;
    name: string;
    spriteUrl?: string;
  };
  natureData?: {
    id: number;
    identifier: string;
    name: string;
    increasedStat?: string;
    decreasedStat?: string;
  };
  abilityData?: {
    id: number;
    identifier: string;
    name: string;
  };
}

export interface Team {
  id: string;
  name: string;
  description: string;
  strategy: string;
  pokemon: TeamPokemon[];
  authorId: string;
  authorUsername?: string;  // Optional, populated when fetching from DB
  isPublic: boolean;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  authProvider: 'local' | 'google' | 'twitter';
  hasPassword: boolean;
  linkedAccounts: LinkedAccount[];
  preferredLanguage: 'en' | 'ja' | 'zh-CN' | 'zh-TW';
  isPremium: boolean;
  subscriptionId?: string;
  subscriptionExpiry?: Date;
  createdAt: Date;
  teams: Team[];
}

export interface LinkedAccount {
  id: string;
  provider: 'google' | 'twitter';
  providerId: string;
  providerEmail: string;
  linkedAt: Date;
}

export interface NewsArticle {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
  excerpt: LocalizedText;
  author: string;
  publishedAt: Date;
  imageUrl?: string;
  tags: string[];
}

export type TierRank = 'S' | 'A' | 'B' | 'C' | 'D' | 'UNRANKED';

export type Language = 'en' | 'ja' | 'zh-CN' | 'zh-TW';

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Comment {
  id: string;
  content: string;
  teamId: string;
  authorId: string;
  authorUsername?: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
}