const listss = document.querySelector('[data-lists]')
const nlist = document.querySelector('[data-new-list-form]')
const ninput = document.querySelector('[data-new-list-input]')
const dlbtn = document.querySelector('[data-delete-list-button]')
const ldisplay = document.querySelector('[data-list-display-container]')
const titlel = document.querySelector('[data-list-title]')
const lcount = document.querySelector('[data-list-count]')
const taskc = document.querySelector('[data-tasks]')
const taskt = document.getElementById('task-template')
const ntform = document.querySelector('[data-new-task-form]')
const ntinput = document.querySelector('[data-new-task-input]')
const clrctb = document.querySelector('[data-clear-complete-tasks-button]')

const lslist = 'task.lists'
const selectedlist = 'task.slid'
let lists = JSON.parse(localStorage.getItem(lslist)) || []
let slid = localStorage.getItem(selectedlist)

listss.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'li') {
    slid = e.target.dataset.listId
    saveAndRender()
  }
})


taskc.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const selectedList = lists.find(list => list.id === slid)
    const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
    selectedTask.complete = e.target.checked
    save()
    rtcount(selectedList)
  }
})

clrctb.addEventListener('click', e => {
  const selectedList = lists.find(list => list.id === slid)
  selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
  saveAndRender()
})

dlbtn.addEventListener('click', e => {
  lists = lists.filter(list => list.id !== slid)
  slid = null
  saveAndRender()
})

nlist.addEventListener('submit', e => {
  e.preventDefault()
  const lname = ninput.value
  if (lname == null || lname === '') return
  const list = createList(lname)
  ninput.value = null
  lists.push(list)
  saveAndRender()
})

ntform.addEventListener('submit', e => {
  e.preventDefault()
  const tname = ntinput.value
  if (tname == null || tname === '') return
  const task = createTask(tname)
  ntinput.value = null
  const selectedList = lists.find(list => list.id === slid)
  selectedList.tasks.push(task)
  saveAndRender()
})

function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] }
}

function createTask(name) {
  return { id: Date.now().toString(), name: name, complete: false }
}

function saveAndRender() {
  save()
  render()
}

function save() {
  localStorage.setItem(lslist, JSON.stringify(lists))
  localStorage.setItem(selectedlist, slid)
}

function render() {
  clearr(listss)
  getlist()

  const selectedList = lists.find(list => list.id === slid)
  if (slid == null) {
    ldisplay.style.display = 'none'
  } else {
    ldisplay.style.display = ''
    titlel.innerText = selectedList.name
    rtcount(selectedList)
    clearr(taskc)
    gettask(selectedList)
  }
}

function gettask(selectedList) {
  selectedList.tasks.forEach(task => {
    const taskElement = document.importNode(taskt.content, true)
    const checkbox = taskElement.querySelector('input')
    checkbox.id = task.id
    checkbox.checked = task.complete
    const label = taskElement.querySelector('label')
    label.htmlFor = task.id
    label.append(task.name)
    taskc.appendChild(taskElement)
  })
}

function rtcount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
  lcount.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function getlist() {
  lists.forEach(list => {
    const listitem = document.createElement('li')
    listitem.dataset.listId = list.id
    listitem.classList.add("list-name")
    listitem.innerText = list.name
    if (list.id === slid) {
      listitem.classList.add('active-list')
    }
    listss.appendChild(listitem)
  })
}

function clearr(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()