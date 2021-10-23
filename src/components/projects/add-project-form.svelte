<style lang="scss">

</style>

<script lang="ts">
    import type { ValidationError } from 'yup';
    import Button, { Label } from '@smui/button';
    import TextField from '@smui/textfield';
    import { createProject, CreateProjectCommand, createProjectCommandSchema } from './models/project';

    let command: CreateProjectCommand = { name: '' };
    let validationErrors: ValidationError[] = [];

    const resetCommand = () => command = { name: '' };

    const resetErrors = () => validationErrors = [];

    const onSubmit = () => {
        createProjectCommandSchema.validate(
            command, 
            { abortEarly: false }
        )
        .then(() => createProject(command).then(resetCommand).then(resetErrors))
        .catch(errors => validationErrors = errors.inner);
    }

    $: nameError = validationErrors.some(_ => _.path === "name");

</script>

<form on:submit|preventDefault={onSubmit}>
    {#if validationErrors}
    <ul>
        {#each validationErrors as error}
            <li>{error.path} - {error.message}</li>
        {/each}
    </ul>
    {/if}
    <TextField 
        bind:value={command.name}
        bind:invalid={nameError}
        label="Name" />

    <Button type="submit" class="myClass">
        <Label>Save</Label>
    </Button>
</form>