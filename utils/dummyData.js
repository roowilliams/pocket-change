import moment from 'moment'

export const markers = {
  '1': {
    id: '1',
    name: 'Eddy',
    avatar: require('../assets/img/eddy-avatar.jpg'),
    fullImage: require('../assets/img/eddy-large.jpg'),
    location: {
      timestamp: moment().day(1), // time
      lat: 40.692815439220865,
      lng: -73.9694103553752,
      seenBy: '' // user that saw them
    },
    charity: {
      id: '1',
      dateJoined: moment().subtract(5, 'month').format('MM/DD/YYYY')
    },
    backers: 34,
    beacon: {
      id: '',
    },
    story: {
      summary: 'At a young age Houdini knew he wanted to be a magician, and he ran away from home by hopping a freight car, according to Appleton Public Library.',
      expanded: 'At a young age Houdini knew he wanted to be a magician, and he ran away from home by hopping a freight car, according to Appleton Public Library. \nHe ended up in Missouri. A few years later, he moved to New York City with his father, but they were so poor Houdini continued to panhandle on the streets. He began his professional career at 17.' 
    }
  },
  '2': {
    id: '2',
    name: 'Julie',
    avatar: require('../assets/img/julie-avatar.jpg'),
    fullImage: require('../assets/img/julie-large.jpg'),
    location: {
      timestamp: moment().day(16), // time
      lat: 40.686815439220865,
      lng: -73.9874103553752,
      seenBy: '' // user that saw them
    },
    charity: {
      id: '1',
      dateJoined: moment().subtract(4, 'month').format('MM/DD/YYYY')
    },
    backers: 46,
    beacon: {
      id: '',
    },
    story: {
      summary: 'At a young age Houdini knew he wanted to be a magician, and he ran away from home by hopping a freight car, according to Appleton Public Library.',
      expanded: 'At a young age Houdini knew he wanted to be a magician, and he ran away from home by hopping a freight car, according to Appleton Public Library. He ended up in Missouri. A few years later, he moved to New York City with his father, but they were so poor Houdini continued to panhandle on the streets. He began his professional career at 17.' 
    }
  },
  '3': {
    id: '3',
    name: 'Marvin',
    avatar: require('../assets/img/marvin-avatar.jpg'),
    fullImage: require('../assets/img/marvin-large.jpg'),
    location: {
      timestamp: moment().day(4), // time
      lat: 40.699815439220865,
      lng: -73.99174103553752,
      seenBy: '' // user that saw them
    },
    charity: {
      id: '1',
      dateJoined: moment().subtract(8, 'month').format('MM/DD/YYYY')
    },
    backers: 73,
    beacon: {
      id: '',
    },
    story: {
      summary: 'At a young age Houdini knew he wanted to be a magician, and he ran away from home by hopping a freight car, according to Appleton Public Library.',
      expanded: 'At a young age Houdini knew he wanted to be a magician, and he ran away from home by hopping a freight car, according to Appleton Public Library. He ended up in Missouri. A few years later, he moved to New York City with his father, but they were so poor Houdini continued to panhandle on the streets. He began his professional career at 17.' 
    }
  }
}

export const markersByID = ['1', '2', '3']

export const charities = {
  1: {
    name: 'The Bowery Mission',
    logo: require('../assets/img/charities/logos/thebowerymission.png')
  }
}
