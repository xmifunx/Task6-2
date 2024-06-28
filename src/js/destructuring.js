export default function specialAttack(character) {
  const attackDesc = [];

  character.special.forEach((desc) => {
    const {
      name, id, icon, description = 'Описание недоступно',
    } = desc;

    attackDesc.push({
      name, id, icon, description,
    });
  });

  return attackDesc;
}
