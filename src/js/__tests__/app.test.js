import healthStatus from '../app';

test('should status healthy', () => {
  const received = healthStatus({ name: 'name', health: 60 });
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('should status wounded equal 50', () => {
  const received = healthStatus({ name: 'name', health: 50 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('should status wounded from 15 to 50', () => {
  const received = healthStatus({ name: 'name', health: 30 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('should status wounded equal 15', () => {
  const received = healthStatus({ name: 'name', health: 15 });
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('should status critical', () => {
  const received = healthStatus({ name: 'name', health: 10 });
  const expected = 'critical';
  expect(received).toBe(expected);
});
