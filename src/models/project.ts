import joi from 'joi';
import humps from 'humps';
import { knex } from '../lib/db';
import { Project, ProjectCamel, CreateProject } from './types';
import { createProjectSchema } from './schemas';

export const table = 'projects';

export const find = async (limit?: number, offset?: number) => {
  const query = knex<Project>(table).select('*').orderBy('start_date', 'asc');

  if (limit) {
    query.limit(limit);
  }
  if (limit && offset) {
    query.offset(offset);
  }

  const results = await query;
  return results.map((r: Project) => humps.camelizeKeys(r)) as ProjectCamel[];
};

export const findById = async (id: number) => {
  const query = knex<Project>(table).select('*').where({ id });

  const results = await query;
  if (results && results.length) {
    return humps.camelizeKeys(results[0]) as ProjectCamel;
  }

  return null;
};

export const create = async (data: CreateProject) => {
  const v = joi.object(createProjectSchema).validate(data, { presence: 'required' });
  if (v.error) {
    throw new Error(`${v.error}`);
  }
  const results: number[] = await knex<Project>(table).insert(humps.decamelizeKeys(data)).returning('id');

  return results[0];
};
