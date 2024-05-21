import { Character, Team } from '../team';

test('should add character to team', () => {
  const team = new Team();
  const char1 = new Character('Archer');
  team.add(char1);
  expect(team.toArray()).toContain(char1);
});

test('should throw error when adding duplicate character', () => {
  const team = new Team();
  const char1 = new Character('Archer');
  team.add(char1);
  expect(() => team.add(char1)).toThrow('Character already exists in the team');
});

test('should add multiple characters to team', () => {
  const team = new Team();
  const char1 = new Character('Archer');
  const char2 = new Character('Swordsman');
  team.addAll(char1, char2);
  expect(team.toArray()).toContain(char1);
  expect(team.toArray()).toContain(char2);
});

test('should not add duplicate characters when using addAll', () => {
  const team = new Team();
  const char1 = new Character('Archer');
  const char2 = new Character('Swordsman');
  team.addAll(char1, char1, char2);
  expect(team.toArray()).toContain(char1);
  expect(team.toArray()).toContain(char2);
  expect(team.toArray().length).toBe(2);
});
