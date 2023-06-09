import core from '@actions/core';
import github from '@actions/github';

try {
    const variables = core?.getInput('variables', { required: false })
        ?.toUpperCase()
        ?.split(',')
        ?.map(value => value?.trim?.()) ?? [];

    const secrets = core
        ?.getInput('secrets', { required: false })
        ?.toUpperCase()
        ?.split(',')
        ?.map(value => value?.trim?.()) ?? [];

    if (github.context.eventName === 'pull_request') {
        throw new Error('Pull requests not supported');
    }

    const branch = process.env.GITHUB_REF_NAME;

    core.info(`Branch ${branch}`);

    for (const variable of variables) {
        core.exportVariable(
            `${variable}_KEY`,
            `${branch.toUpperCase()}_${variable}`
        );
    }

    for (const secret of secrets) {
        core.exportVariable(
            `${secret}_KEY`,
            `${branch.toUpperCase()}_${secret}`
        );
    }
} catch (error) {
    core.setFailed(error);
}