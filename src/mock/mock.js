import Mock from 'mockjs';
var template = {
  'data|1-200': [{
    'title': '@title',
    'img':'@Image'
  }]
}
Mock.mock('/api/data', template);
