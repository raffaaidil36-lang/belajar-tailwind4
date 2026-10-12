// ? MENANGKAP / MENCARI ELEMENT HTML
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const title = prompt('Masukkan nama tugas baru');

    if (!title || !title.trim()) return;

    const item = document.createElement('div');
    item.className = 'flex flex-wrap items-center justify-between gap-4 p-6';

    const info = document.createElement('div');
    const heading = document.createElement('h3');
    heading.className = 'font-semibold';
    heading.textContent = title.trim();

    const description = document.createElement('p');
    description.className = 'mt-1 text-slate-500';
    description.textContent = 'Tugas Baru';

    info.append(heading, description);

    const badge= document.createElement('span');
    badge.className = 'rounded-lg bg-amber-100 px-3 py-2 text-sm font-medium text-amber-700';
    badge.textContent = 'Menunggu';

    item.append(info, badge);
    taskList.append(item);

    document.getElementById('total').textContent = taskList.children.length;
});