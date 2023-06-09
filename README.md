# Route secrets based on branch

Use Example:
```yaml
    - uses: onescreenai/route-branch-secrets
      with:
        variables: ENV_ONE, ENV_TWO
        secrets: SECRET_ONE, SECRET_TWO
```

Access Example:
```yaml
    env:
        ACTUAL_ENV_ONE: ${{ env[env.ENV_ONE_KEY] }}'
        ACTUAL_ENV_TWO: ${{ env[env.ENV_TWO_KEY] }}'
        ACTUAL_SECRET_ONE: ${{ secrets[env.SECRET_ONE_KEY] }}
        ACTUAL_SECRET_TWO: ${{ secrets[env.SECRET_TWO_KEY] }}
```
