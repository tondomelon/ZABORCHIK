const listOptions = [
    {
        title: 'Нижегоросдсий',
        status: false
    },
    {
        title: 'Советский',
        status: false
    },
    {
        title: 'Московский',
        status: false
    },
];

//Функция создания списка в выпадающем блоке
function createList() {
    const selectList = document.querySelector('.select-list');
    const selectInput = document.querySelector('.select-input');
    selectList.innerHTML = ''; //Очищаем текущий список
    //Переобходим весь список объектов
    listOptions.forEach((option) => {
        //Выводим элементы только со статусом false
        if (option.status == false) {
            const listItem = document.createElement('div');
            listItem.classList.add('select-item');
            listItem.innerText = option.title;

            //Отслеживаем клик на элемент выпадающего списка
            listItem.addEventListener('click', () => {
                //Создаем чипс с кнопкой
                const chipsElement = document.createElement('div');
                const chipsText = document.createElement('div');
                const chipsButton = document.createElement('div');
                chipsElement.classList.add('chips-item');
                chipsButton.classList.add('chips-button');
                chipsText.innerText = option.title;
                selectInput.appendChild(chipsElement);
                chipsElement.appendChild(chipsText);
                chipsElement.appendChild(chipsButton);

                //Отслеживаем клик на чипс
                chipsElement.addEventListener('click', () => {
                    //Удаляем элемент из input по клику на него
                    selectInput.removeChild(chipsElement);
                    //Меняем статус кликнутого элемента выпадающего списка
                    //и пересоздаем выпадающий список
                    option.status = false;
                    createList();
                });

                //Меняем статус кликнутого элемента выпадающего списка
                //и пересоздаем выпадающий список
                option.status = true;
                createList();
            });
            
            //Добавляем элемент выпадающего списка
            selectList.appendChild(listItem);
        }
    });
}

function initSelect() {
    const selectList = document.querySelector('.select-list');
    const selectButton = document.querySelector('.select-button');
    const selectInput = document.querySelector('.select-input');
    //После запуска выводим первый раз список выпадающих элементов
    createList();
    
    //Остлеживаем клик на кнопку со стрелкой в input
    selectButton.addEventListener('click', () => {
        selectList.classList.toggle('active');
    });

    //Остлеживаем клик на input
    selectInput.addEventListener('click', () => {
        selectList.classList.add('active');
    }); 
}

document.addEventListener('DOMContentLoaded', () => {
    initSelect();
});